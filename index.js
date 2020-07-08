import simpleGit from 'simple-git';
import fs from 'fs';
fs.writeFileSync("teste", "123")
const git = simpleGit();
git.add("./*")
git.commit("simple git works")