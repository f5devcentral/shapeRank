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

For a quick overview of the language, you can check out these talks:

https://www.youtube.com/watch?v=x1FoTYnJxeY&feature=youtu.be
an early overview of the project (by now, somewhat out of date,
especially the material on types). 38 minutes.

https://www.youtube.com/watch?v=vMO-CFlbYf8. A quick (15 minute)
discussion the reactive aspects of ShapeRank.

You can  also read the related [in-progress paper](http://shapeRankReactiveOverview.pdf)


## Getting Started

ShapeRank runs on the web, so you can start with a [live,  interactive introduction to ShapeRank](
https://f5devcentral.github.io/shapeRank/shapeRankIntro.html?snapshot=ShapeRankDemo.vfuel).

Or see [a more detailed presentation](
https://f5devcentral.github.io/shapeRank/shapeRankPreso.html?snapshot=ShapeRankDemo.vfuel#).


## Installation

Strictly speaking, there is no installation needed, as all ShapeRank
software runs in a web browser. If you want to go beyond the demos,
you can clone this repository at the location of your choice:

```
git clone https://github.com/f5devcentral/shapeRank.git
```

You can then load the ShapeRank sources into the [online Newspeak IDE](https://newspeaklanguage.org/samples/primordialsoup.html?snapshot=HopscotchWebIDE.vfuel).

However, if you wish to contribute to
ShapeRank,  you will likely prefer to install the IDE locally.  See
the next section, **Development**,  for details.

As the project progresses, ShapeRank specific web based  tools for
developing and deploying new ShapeRank code should become available.


## Development

To contribute to ShapeRank, you will want to download the the [Newspeak web
IDE](https://newspeaklanguage.org/downloads.html). Make sure you are
getting the web IDE, not the old Smalltalk based version!

Note that the IDE app's are unsigned, so you will need to explicitly force
the OS to open them the first  time.

## Building ShapeRank with Docker

ShapeRank also comes with a Dockerfile, which can be used to build the source. We use NPM to make it easy to build ShapeRank, so make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop) and [NodeJS](https://nodejs.org/) installed.

Use `npm i` to install dependencies.

Use `npm run build` to build ShapeRank. (Make sure you have Docker running.)

## Support
For support, please open a GitHub issue. Note that ShapeRank is research project, not a product.

## Community Code of Conduct
Please refer to the [F5 DevCentral Community Code of Conduct](code_of_conduct.md).

## Running the Demos

### C Build Demo
1. ```npm i``` to install dependencies.
2. ```npm run demo_01``` to run the C build demo.

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
