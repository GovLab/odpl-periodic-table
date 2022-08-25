# Open Data Impact Case Studies

This is a static site using Jekyll

### Installation
First make sure ruby, node, npm, and bundler are installed on your system, then:

    bundle install
    npm install
    bundle exec jekyll build

### Run server

    bundle exec jekyll serve

### Data / Site Structure
Site structure follows a standard Jekyll site, utilizing child templates for the case study pages. Most of the data that would need to be updated can be found in the following locations:
    - Case studies are jekyll templates located in the `source/_case_studies` folder.
    - Data for some of the other pages is generated from yaml files located in `source/_data`.
    - Data for the D3 visualizations / maps is located in `js/packstudies.json`

### Deploy

    gulp deploy

#### Troubleshooting
##### Deployment

The gulp-gh-pages plugin stores a cache of the repo automatically in a `.publish` folder, which throws this error when you try to deploy after deleting your gh-pages branch.

```
Error in plugin 'gulp-gh-pages'
Message:
    Command failed: git pull
Your configuration specifies to merge with the ref 'refs/heads/gh-pages'
from the remote, but no such ref was fetched.

Details:
    killed: false
    code: 1
    signal: null
    cmd: git pull
```

To fix this, delete the `.publish` folder in the root of the directory and then run `gulp deploy` again.

See:
https://github.com/shinnn/gulp-gh-pages/issues/109