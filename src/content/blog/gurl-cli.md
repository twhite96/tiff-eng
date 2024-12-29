---
pubDatetime: 2024-03-24
title: "gURL: A cURL Wrapper Written in Go"
description: Moving on from frontend to something new.
---

Briefly: I am writing a CLI tool that fetches info from GitHub's REST API as a wrapper around cURL.

Why?

Just to keep my finger on the pulse of software development and to practice my programming skills because believe it or not, being able to code as a cybersecurity professional is extremely useful, even though it isn't _technically necessary_.

I'm currently wading though documentation on Go modules and Go standard library packages, as well as reading other code examples to see how I want to structure my application.

First, I found a [repo that](https://github.com/wick3dr0se/github-api-curl/tree/master) uses shell scripts to wrap around the GitHub API. This gave me the idea for splitting up my tool into different directories.

Then, I fiddled around with [Google's GitHub Go library](https://github.com/google/go-github/tree/master) to see how they used Go to build the library.

## Fits and Starts

My first inkling was to crib this code from the Google repo:

```go
var defaultBaseURL = "https://github.com/"

// Client is a GitHub scraping client.
type Client struct {
 *http.Client

 // base URL for github.com pages.  Exposed primarily for testing.  Also
 // used for saving and restoring cookies on the Client.
 baseURL *url.URL
}
```

I wasn't exactly sure what I was looking at; I have a `baseURL` variable that is assigned the GitHub url. I've imported the `net/http` package, as it would have been in this example. We have a `Client` type that is also a `struct` which I have forgetten what they are exactly, as it has been a while since I've read the C++ docs, which also has a `struct` but I think that `struct` in this instance has the `type` keyword to denote that it is a `class` or something.

In any case, I was trying to figure out how to use string interpolation in the URL parameters like you would in JavaScript template strings:

```js
// Octokit.js
// https://github.com/octokit/core.js#readme
const octokit = new Octokit({
  auth: "YOUR-TOKEN",
});

// the request method contains template strings which is
// JavaScript's way of doing string interpolation

await octokit.request("GET /repos/{owner}/{repo}", {
  owner: "OWNER",
  repo: "REPO",
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
```

How does that work in Go?

At first I was thinking of using `Stripln()` to do string interpolation but as a [StackOverflow user said](https://stackoverflow.com/a/71181938/3800146), to put that junk in a query parameter would be messy and unsafe. The user suggested the op use the `net/http` library which solves all the issues I'd face trying to make `GET` requests to GitHub's REST API.

The example given:

```go
params := url.Values{
    "page[size]":        []string{"100"},
    "page[" + key + "]": []string{"1"},
}
u := &url.URL{
    Scheme:   "https",
    Host:     "url.com",
    Path:     "/path",
    RawQuery: params.Encode(),
}
req, err := http.NewRequest("GET", u.String(), nil)
```

This should do it for now.
