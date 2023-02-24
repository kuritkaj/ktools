oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @kuritkaj/ktools
$ ktools COMMAND
running command...
$ ktools (--version)
@kuritkaj/ktools/1.0.0 linux-x64 node-v19.6.0
$ ktools --help [COMMAND]
USAGE
  $ ktools COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`ktools build`](#ktools-build)
* [`ktools dev`](#ktools-dev)
* [`ktools format`](#ktools-format)
* [`ktools help [COMMANDS]`](#ktools-help-commands)
* [`ktools lint`](#ktools-lint)
* [`ktools plugins`](#ktools-plugins)
* [`ktools plugins:install PLUGIN...`](#ktools-pluginsinstall-plugin)
* [`ktools plugins:inspect PLUGIN...`](#ktools-pluginsinspect-plugin)
* [`ktools plugins:install PLUGIN...`](#ktools-pluginsinstall-plugin-1)
* [`ktools plugins:link PLUGIN`](#ktools-pluginslink-plugin)
* [`ktools plugins:uninstall PLUGIN...`](#ktools-pluginsuninstall-plugin)
* [`ktools plugins:uninstall PLUGIN...`](#ktools-pluginsuninstall-plugin-1)
* [`ktools plugins:uninstall PLUGIN...`](#ktools-pluginsuninstall-plugin-2)
* [`ktools plugins update`](#ktools-plugins-update)
* [`ktools preview`](#ktools-preview)
* [`ktools release`](#ktools-release)

## `ktools build`

Build sources action

```
USAGE
  $ ktools build [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Build sources action

EXAMPLES
  $ ktools build
```

_See code: [dist/commands/build/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/build/index.js)_

## `ktools dev`

Run dev server

```
USAGE
  $ ktools dev [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Run dev server

EXAMPLES
  $ ktools dev
```

_See code: [dist/commands/dev/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/dev/index.js)_

## `ktools format`

Format sources

```
USAGE
  $ ktools format [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Format sources

EXAMPLES
  $ ktools format
```

_See code: [dist/commands/format/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/format/index.js)_

## `ktools help [COMMANDS]`

Display help for ktools.

```
USAGE
  $ ktools help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ktools.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.4/src/commands/help.ts)_

## `ktools lint`

Lint sources

```
USAGE
  $ ktools lint [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Lint sources

EXAMPLES
  $ ktools lint
```

_See code: [dist/commands/lint/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/lint/index.js)_

## `ktools plugins`

List installed plugins.

```
USAGE
  $ ktools plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ktools plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.3.2/src/commands/plugins/index.ts)_

## `ktools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ktools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ktools plugins add

EXAMPLES
  $ ktools plugins:install myplugin 

  $ ktools plugins:install https://github.com/someuser/someplugin

  $ ktools plugins:install someuser/someplugin
```

## `ktools plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ktools plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ktools plugins:inspect myplugin
```

## `ktools plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ ktools plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ ktools plugins add

EXAMPLES
  $ ktools plugins:install myplugin 

  $ ktools plugins:install https://github.com/someuser/someplugin

  $ ktools plugins:install someuser/someplugin
```

## `ktools plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ ktools plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ktools plugins:link myplugin
```

## `ktools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ktools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ktools plugins unlink
  $ ktools plugins remove
```

## `ktools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ktools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ktools plugins unlink
  $ ktools plugins remove
```

## `ktools plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ ktools plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ktools plugins unlink
  $ ktools plugins remove
```

## `ktools plugins update`

Update installed plugins.

```
USAGE
  $ ktools plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `ktools preview`

Preview production build

```
USAGE
  $ ktools preview [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Preview production build

EXAMPLES
  $ ktools preview
```

_See code: [dist/commands/preview/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/preview/index.js)_

## `ktools release`

Release sources action

```
USAGE
  $ ktools release [-i <value>] [-h]

FLAGS
  -h, --help                Show CLI help.
  -i, --ignoreFile=<value>  [default: /home/jakub/Projects/kuritkaj/ktools/.gitignore] config file path

DESCRIPTION
  Release sources action

EXAMPLES
  $ ktools release
```

_See code: [dist/commands/release/index.js](https://github.com/kuritkaj/ktools/blob/v1.0.0/dist/commands/release/index.js)_
<!-- commandsstop -->
