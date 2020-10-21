# METRONOME

This metronome is being built with the intent to learn TDD. The steps described here are all abreviations of the actual tests that are being writen. Each step has its own branch so it's easy to check it out what was done.

## Step 1

- Behaviours added towards the action state of the metronome's(is running or not)

## Step 2

- Behaviours added towards toggling the metronome's light ON and OFF

## Step 3

- Behaviours added towards the relationship between the click of the metronome and the color of the lights
- Beheaviour added towards stopping the metronome

## Step 4

- Refactor click function logic
- Refactor the click function
- Behaviour added towards test to every clicks when beat = 4
- Behaviour added towards test to every clicks when beat = 3

## Step 5

- Behaviours added towards reseting the value of the clickCounter when the metronome is stopped

## Step 6

- Behaviour added towards turning the lights off when the metronome is toggled(stopped)

## Step 7

- Behaviour added towards calculation the interval tempo of the click/beats

## Setup

``` bash
git clone https://github.com/bruno-braga/metronome.git
cd metronome
yarn install
```

## Running & Test commands

``` bash
# serve with hot reload at localhost:8080
yarn dev

# run unit tests
yarn unit
```
