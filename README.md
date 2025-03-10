<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 10 2025 01:01:01 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.3 | ✗      | 48195.2    | 20.27        | 8.59          |
| fastify                  | 5.2.1    | ✓      | 47076.0    | 20.74        | 8.44          |
| polka                    | 0.5.2    | ✓      | 47040.0    | 20.75        | 8.39          |
| frourio                  | 1.3.1    | ✓      | 46847.2    | 20.84        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46145.6    | 21.17        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 46137.6    | 21.16        | 8.23          |
| 0http                    | 4.2.0    | ✓      | 46009.6    | 21.24        | 8.20          |
| polkadot                 | 1.0.0    | ✗      | 45830.4    | 21.33        | 8.17          |
| connect                  | 3.7.0    | ✗      | 45748.8    | 21.35        | 8.16          |
| server-base              | 7.1.32   | ✗      | 45636.0    | 21.40        | 8.14          |
| micro                    | 10.0.1   | ✗      | 45388.0    | 21.53        | 8.09          |
| h3                       | 1.15.1   | ✗      | 43382.4    | 22.55        | 7.74          |
| connect-router           | 1.3.8    | ✓      | 43277.6    | 22.60        | 7.72          |
| micro-route              | 2.5.0    | ✓      | 42853.6    | 22.83        | 7.64          |
| h3-router                | 1.15.1   | ✓      | 42619.2    | 22.97        | 7.60          |
| adonisjs                 | 7.5.0    | ✓      | 42471.2    | 23.05        | 7.57          |
| hono                     | 4.7.4    | ✓      | 40327.2    | 24.29        | 6.61          |
| restana                  | v5.0.0   | ✓      | 39855.2    | 24.60        | 7.11          |
| koa                      | 2.16.0   | ✗      | 37416.0    | 26.23        | 6.67          |
| take-five                | 2.0.0    | ✓      | 35900.6    | 27.35        | 12.91         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35643.4    | 27.55        | 6.36          |
| restify                  | 11.1.0   | ✓      | 35493.8    | 27.68        | 6.40          |
| koa-router               | 13.1.0   | ✓      | 33471.2    | 29.39        | 5.97          |
| hapi                     | 21.4.0   | ✓      | 31616.0    | 31.12        | 5.64          |
| microrouter              | 3.1.3    | ✓      | 30213.6    | 32.59        | 5.39          |
| fastify-big-json         | 5.2.1    | ✓      | 12036.4    | 82.52        | 138.49        |
| frourio-express          | 1.3.1    | ✓      | 10110.6    | 98.31        | 1.80          |
| express                  | 5.0.1    | ✓      | 10033.4    | 99.07        | 1.79          |
| express-with-middlewares | 5.0.1    | ✓      | 9049.5     | 109.88       | 3.37          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
