## Color classifier

A neutral network to classify colors based on their RGB value.

*[See the project presentation](https://github.com/notadilnaqvi/color-classifier/blob/master/Color-Classifier.pdf)*

The project was completed in 3 parts.

#### 1. Data collection

The data set was to have 3 freatures `{r, g, b}` and 9 classes including `red-ish` `blue-ish` `green-ish` and so on.

One data point consists of 3 integers (between 0-255) and a label. A random data sample from the data set is givin below:

`{r = 133, g = 103, b = 152, label = 'purple-ish'}`

I built a [website](https://notadilnaqvi.github.io/color-classifier/) to crowd-source my training data and collected 5000-ish data points.
    
#### 2. Data preprocessing

As the data was crowd sourced, it needed to be cleaned to remove incorrect data points. I used Shiffman's implementation and cleaned my data using p5.

#### 3. Training the model

This project was supposed to be my entry point in the world of ML so I chose a rather high level and beginner friendly AI library - Scikit Learn. It gave me the tools to easily train my model while giving me the independence to play with all kinds of hyper-parameters. At the end the accuracy achieved was about 85%.

## Disclosure

This was inspired by [Daniel Shiffman](https://shiffman.net/) who made a tutorial on the same project on his [Youtube channel](https://www.youtube.com/user/shiffman). I follow said tutorial for part of data collection and preprocessing. While both projects essentially do the same thing, it is important to note a few distinctions in our implementations.
 
|Shiffman...| I...   |
|---|---|
|made model in JS|made model in Python|
|used Tensorflow|used Scikit Learn|
|used p5 to for data collection|used vanilla JS with jQuery sprinkled in|
