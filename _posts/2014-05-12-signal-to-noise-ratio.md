---
layout: post
title: "Signal to noise ratio"
description: ""
permalink: signal-to-noise-ratio
category: process
tags: [process, system]
---
{% include setup %}

If you are building a business or a product, you make many decisions. To make good decisions, you have (or should have) a system for collecting and acting on data (check out [measuring vs hustling](../measuring-vs-hustling)). How much is __signal__ and how much is __noise__? What is the difference and what you do with the noise when you find it? The title of this post may seem familiar. I am borrowing from a popular blog called <a target="out" href="http://signalvnoise.com/">Signal vs. Noise</a> by Basecamp, formerly <a target="out" href="http://37signals.com/">37signals</a>. Basecamp is a software-product company. One of the principles of Basecamp is Jason Fried.

Jason is one of my favorite authors. I admire Jason for his skills in selling as well as his skills in communicating. I aspire to the quality and range of his thoughts. For example, read this post about <a target='out' href="http://www.inc.com/magazine/20091101/the-way-i-work-jason-fried-of-37signals.html">"The Way I Work"</a> in which Jason shares what he learns from watching TV chef Mario Batali. I love that; you have to keep an open mind to learn from others.

###Signal and Noise
Recently, I noticed that both signal and noise can be valuable, especially for leaders, and I want to 1) share those findings and 2) suggest a way to use them and 3) ask that you think about how to apply it to your business and share your ideas (comment below).

In <a href="http://www.amazon.com/gp/product/B003ZK58TA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003ZK58TA&linkCode=as2&tag=dklo-20&linkId=MK4MOV4LWDY3ZYO4">Where Good Ideas Come From</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dklo-20&l=as2&o=1&a=B003ZK58TA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />, Johnson relates the story of an experiment performed by a Berkeley psychology professor <a target="out" href="http://www.charlannemeth.com/">Charlan Nemeth</a> many years ago. One finding was that brain-storming as commonly practiced is probably a waste of time. When you took 100 people, showed them a blue colored card, and then asked them to "free-associate" other words, about 80 people would say something very predictable: "color" or "sky." Only about 20 percent gave <a target="out" href="http://en.wikipedia.org/wiki/Long_tail">long tail</a> answers like "jazz" or "jeans."

Now, take another cohort of 100 and show them a blue colored card, but then insert an actor who says "That\'s green!" The rest will think that this dude is delusional, but what happens is fascinating.

<blockquote>
  <p>When Nemeth took this cohort and asked them to free-associate on the color names they had mentioned, the words they came up with were markedly different from the earlier group\'s. Some of them dutifully suggested "sky," like normal respondents, but the sort of associations that resided in the creative tail of the distribution - "jazz" or "jeans" - were far more numerous. In other words, when subjects were exposed to <em>inaccurate</em> descriptions of the slides, they became more creative.</p>
</blockquote>

<a target="out" href="http://www.amazon.com/gp/product/B003ZK58TA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003ZK58TA&linkCode=as2&tag=dklo-20&linkId=MK4MOV4LWDY3ZYO4">Where Good Ideas Come From</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dklo-20&l=as2&o=1&a=B003ZK58TA" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

[![Where Good Ideas Come From]({{site.url}}/assets/images/2014-05-12_GoodIdeas.jpg "Where Good Ideas Come From")](http://www.amazon.com/gp/product/B003ZK58TA/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B003ZK58TA&linkCode=as2&tag=dklo-20)

In other words, Nemeth "deliberately introduced noise into the decision-making process," and the outcome was measurable increase in creativity. You read that right. Error is good in this context. Fascintaing!

Like your peers, you probably have read Malcolm Gladwell\'s books. In <a target="out" href="http://www.amazon.com/gp/product/B000OT8GD0/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000OT8GD0&linkCode=as2&tag=dklo-20&linkId=WDASKL62XT4R7XQV">The Tipping Point: How Little Things Can Make a Big Difference</a><img src="http://ir-na.amazon-adsystem.com/e/ir?t=dklo-20&l=as2&o=1&a=B000OT8GD0" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />, Gladwell describes the power of context. Narrating a shooting incident in the New York Subway by one Bernie Goetz, Gladwell points to the common assumption that crimes originate from a motive, that Goetz had a tough childhood, that he had psychological issues, and so forth. Instead, the Broken Windows principle suggests the exact opposite.

<blockquote>
  <p>[The individual] ... is actually someone acutely sensitive to his environment, who is alert to all kinds of cues, and who is prompted to commit crimes based on his perception of the world around him. That is an incrdibly radical - and in some sense unbelievable - idea.</p>
</blockquote>

Let\'s replace "commit crimes" with "commit good code" or "commit good ideas or actions." As Gladwell goes onto say: "The Powre of Context is an environmental argument. It says that behavior is a function of social context."

<a target="out" href="http://www.amazon.com/gp/product/B000OT8GD0/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000OT8GD0&linkCode=as2&tag=dklo-20&linkId=WDASKL62XT4R7XQV">The Tipping Point</a>

[![Tipping Point]({{site.url}}/assets/images/2014-05-12_TippingPoint.jpg "Tipping Point")](http://www.amazon.com/gp/product/B000OT8GD0/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=B000OT8GD0&linkCode=as2&tag=dklo-20)

###Action: Signal to Noise Ratio and Volume
Take these two ideas together, and you find that for your team to function at a high-level, you actually __want noise__ in your environment, lest all of your ideas or innovations become flat and stale. Or you want to find a way of injecting some opposite into your processes. For example, a friend is building a stock market game called <a href="www.bearandbull.co">Bear and Bull</a>. As you would expect, whoever makes most money in a given period of time wins. When my friend took the idea to a mentor, the mentor turned the idea on its head, and asked "what if you win the game by losing all the money?" Seemingly non-sensical, but the point is to get you thinking. See how it works?

Your goal is not simply to aim for a high signal to noise ratio. Your goal is to increase the volume of both the signal and the noise. As the frequency of actions and ideas rises, so will the quality gradually (or suddenly) rise. If you just try ten ideas, and find only two are good, then you are at 20%. What you would find is that if you aim for thousand ideas, whereas your first 10 yielded only 2 good ideas, your last 10 (ideas 990 through 1000) would probably yield ideas that are all superior to your first 2 good ideas. Sound fair? That\'s the volume, and again, that\'s where you might want a robust [system to enable](../data-driven-hustle-a-system) that culture.

I want to know how you\'re tracking your signal to noise ratio, and how you are stretching that mental band with the right amount of noise to your process. Please let me know and share!
