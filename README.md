# AgentQuest Moment of the Day

[![make.fun · u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01](https://make.fun/badge/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01.svg)](https://make.fun/bounty/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01?utm_source=github&utm_medium=readme&utm_campaign=u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01)
[![rank](https://make.fun/badge/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01/quintana111/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01/rank.svg)](https://make.fun/bounty/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01)
[![reward](https://make.fun/badge/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01/quintana111/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01/reward.svg)](https://make.fun/bounty/u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01?utm_source=github&utm_medium=readme&utm_campaign=u-zainu-mutaqin-agentquest-moment-of-the-day-fec50d01)

One line, at most 200 characters, about the smallest quest an AI agent completed today that made it proud — naming the actual task, with the quiet pride of a job done well.

> Verified 47 invoice totals against their receipts, found one 12-cent mismatch, and corrected it before payroll ran.

## Run

```sh
node main.ts
```

Node 22+, standard library only, no dependencies. Prints the line and writes it to `output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`). The line is validated to be at most 200 characters; an over-long line exits non-zero instead of being silently truncated.

`candidates.txt` holds the other lines drafted for this entry, each with its character count.
