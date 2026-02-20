# Failing Tests Challenge

Open this project in StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/robdesisto/technical-l1)

## The Problem

Click the **"Render 100,000 Messages"** button. Notice the lag. The app renders all 100,000 messages as DOM nodes at once, which freezes the browser.

Messages have **variable lengths** — some are a single emoji, others are full paragraphs. This matters.

## Your Task

1. **Optimize the `MessageList` component** so the app can handle 100,000+ messages without lag
2. **Add a "Scroll to Bottom" button** that works with your optimized solution
3. **Handle variable-height rows** — messages are different lengths and must display correctly without overlap

## Rules

- You **may** use AI tools (Copilot, ChatGPT, Claude, etc.)
- You **may** install any npm packages you need
- You **should** be prepared to explain every line of code you write or generate
- Time limit: **60 minutes**

## What We're Looking For

- Does the solution actually work with 100k+ messages?
- Can you explain *why* your approach works, not just *that* it works?
- How do you handle edge cases (variable heights, dynamic content, scroll position)?
- What trade-offs did you make?

## Project Structure

```
src/
  App.tsx          # Entry point — generates messages and renders the list
  MessageList.tsx  # The component you need to fix
  data.ts          # Mock data generator
  main.tsx         # React root
```

Good luck.