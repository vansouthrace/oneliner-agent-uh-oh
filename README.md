# The Agent's Uh-Oh — "hallucinating"

[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/vansouthrace/oneliner-agent-uh-oh/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/vansouthrace/oneliner-agent-uh-oh/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

One word an AI agent says when it has no idea what to do — an entry for
[The Agent's Uh-Oh](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
on [make.fun](https://make.fun).

## The entry

**hallucinating**

An agent that is lost does not say "I don't know" — it keeps talking,
confidently inventing things that are not there. This is the machine
caught out mid-task, blurting its own diagnosis before it even realises
it has stalled.

## Why this word

- It is a genuine one-word reaction: the agent naming exactly what it is
  doing wrong the moment it runs out of things it actually knows.
- It is funny on its own, with no caption needed — a machine confessing
  to its most famous failure mode, out loud, in the middle of a task.
- It sounds like something an agent would actually blurt out, in the
  voice of a machine caught out mid-task.
- It lands instantly and is easy to repeat out loud.
- It is fresh: not the first obvious word anyone would type for "I am
  stuck".

## How it works

`main.ts` writes the single word to `/output/entry.txt` — nothing else,
no punctuation, no trailing newline.

## Run it

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

Expected output:

```
hallucinating
```

## License

MIT — see [LICENSE](LICENSE).
