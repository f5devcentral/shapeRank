# ShapeRank

ShapeRank is new programming language under development at F5.  ShapeRank is targeted at data analytics, machine learning and reactive programming. ShapeRank is purely functional and statically typed. All ShapeRank values are multi-dimensional streams, and all operations are automatically lifted to process such streams in parallel. This lifting originates in the APL language family, and is known as rank-polymorphism.  ShapeRank is unusual in that it extends  rank-polymorphism to streams.


## Overview

The current ShapeRank prototype is implemented in [Newspeak](https://newspeaklanguage.org).
The goal is to produce a complete reference implementation of ShapeRank,
in order to validate the design.

The reference implementation is currently under development. Key features are
lacking or buggy. This is very early stage  development. We intend to do the bulk
of the work in the open, in this repository.

Once the reference implementation is complete, we intend to build
an industrial-strength, high performance version using a systems
programming language such as Rust.

For a quick overview of the language, you can check out this talk:

https://www.youtube.com/watch?v=x1FoTYnJxeY&feature=youtu.be


## Getting Started

ShapeRank runs on the web, so you can start with a [live,  interactive introduction to ShapeRank](
https://f5devcentral.github.io/shapeRank/shapeRankIntro.html?snapshot=ShapeRankDemo.vfuel).

Or see [a more detailed presentation](
https://f5devcentral.github.io/shapeRank/shapeRankPreso.html?snapshot=ShapeRankDemo.vfuel#).




## Installation

To contribute to ShapeRank, you will want to get the ShapeRank development environment, which is a
customized version of the Newspeak web IDE, available:

[For Mac (Intel)](https://f5devcentral.github.io/shapeRank/downloads/ShapeRankWithIDE.app.zip)

[For Windows](https://f5devcentral.github.io/shapeRank/downloads/shapeRankWithIDE.zip)

Note that the app's are unsigned, so you wiill need to explicitly force
the OS to open them the first  time.


If you intend to do serious development on ShapeRank, read on:

Create a directory, say, ShapeRank, in the place of your choosing.

```
mkdir ShapeRank
```

In this directory, we will be installing the shapeRank repository:

```
git clone https://github.com/f5devcentral/shapeRank.git
```

We will also be installing some of its dependencies. In particular,  you will need to install the Newspeak WebAssembly (aka WASM) implementation. Make sure you are still in the ShapeRank
directory.

Clone the newspeak directory:

```
git clone https://github.com/newspeaklanguage/newspeak.git
```

Next clone the newspeak WASM  VM

```
git clone https://github.com/newspeaklanguage/primordialsoup.git
```

Then (very important!) switch to the extraRevs branch of primordialsoup.

```
cd primordialsoup
git checkout extraRevs
```

and check the instructions at
https://github.com/newspeaklanguage/primordialsoup/blob/master/docs/building.md
to ensure you have all the dependencies installed. Now  edit the build.sh script so
that its $EMSDK variable points at your emscripten installation.

Now return to the ShapeRank directory:

```
cd ../shapeRank
```

Download CodeMirror from  https://codemirror.net/.
and place a copy at the top level of the shapeRank repository.

Then build this repository using build.sh.


```
source build.sh
```

At this point you should have a vfuel file in ./out.
To access it, you need to run a local web server or your own version of the electron app.
To run a server, we recommend you open a new terminal and, in the ShapeRank/shapeRank directory, do

```
source serve.sh
```

You can now access the application in a web browser at:
http://localhost:8080/out/web/primordialsoup.html?snapshot=ShapeRankIDE.vfuel


An alternative to running a web server is to modify your ShapeRank application in place by updating its copy of ShapeRankIDE.vfuel. The script updateApp provides a template for doing so. You can refresh the application to get at the latest version you've built.
[]: # (What apps do we want? The Notebook, the IDE, others?)



## Development

If you'd like to contribute to the reference implementation, you'll need to use the Newspeak Web IDE.


## Support
For support, please open a GitHub issue. Note that ShapeRank is research project, not a product.

## Community Code of Conduct
Please refer to the [F5 DevCentral Community Code of Conduct](code_of_conduct.md).


## License
[Apache License 2.0](LICENSE)

## Copyright
Copyright 2014-2021 F5 Networks Inc.


### F5 Networks Contributor License Agreement

Before you start contributing to any project sponsored by F5 Networks, Inc. (F5) on GitHub, you will need to sign a Contributor License Agreement (CLA).

If you are signing as an individual, we recommend that you talk to your employer (if applicable) before signing the CLA since some employment agreements may have restrictions on your contributions to other projects.
Otherwise by submitting a CLA you represent that you are legally entitled to grant the licenses recited therein.

If your employer has rights to intellectual property that you create, such as your contributions, you represent that you have received permission to make contributions on behalf of that employer, that your employer has waived such rights for your contributions, or that your employer has executed a separate CLA with F5.

If you are signing on behalf of a company, you represent that you are legally entitled to grant the license recited therein.
You represent further that each employee of the entity that submits contributions is authorized to submit such contributions on behalf of the entity pursuant to the CLA.
