const fs = require('fs');
const path = require('path');
let direct = new Map();
let ids = new Map();
globalThis.goog = {
    addDependency(filename, [id], deps) {
        if (filename.endsWith('_externs.js')) {
            const matchingFile = filename.substr(0, filename.length - 11) + '.js';
            direct.get(matchingFile).push(filename);
            return;
        }
        direct.set(filename, [filename, ...deps]);
        ids.set(id, filename);
    }
}
require('../closure/goog/deps.js');
for (let [filename, deps] of direct.entries()) {
    const contents = fs.readFileSync(path.join('closure/goog', filename), 'utf8');
    const matches = contents.matchAll(/goog\.requireType\('([^']+)'\)/g);
    for (let id of matches) {
        deps.push(ids.get(id[1]));
    }
}
let transitive = [];
for (let deps of direct.values()) {
    let allDeps = new Set();
    let toProcess = [...deps];
    while (toProcess.length > 0) {
        let filename = toProcess.shift();
        if (allDeps.has(filename)) continue;
        allDeps.add(filename);
        if (!direct.has(filename)) continue;
        let [_, ...deps] = direct.get(filename);
        toProcess.push(...deps);
    }
    transitive.push(['base.js', ...allDeps]);
}
transitive.sort((a, b) => a.length - b.length || a[1].localeCompare(b[1]));

let startat = "storage/collectablestoragetester.js";
console.log('#!/bin/zsh');
console.log('set -e');
for (let files of transitive) {
    let filename = files[1];
    if (startat) {
        if (filename.endsWith(startat)) {
            startat = null;
        } else {
            continue;
        }
    }
    if (!filename || filename == 'base.js' || filename.startsWith('bootstrap/')) continue;

    console.log('echo "Checking ' + filename + '"');
    console.log(`npx google-closure-compiler --checks-only --jscomp_error checkTypes --js ${files.map(f => path.join('closure/goog', f)).join(' ')}`);
}