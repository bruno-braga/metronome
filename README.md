# METRONOME 

This metronome is being built with the intent to learn TDD. The steps described here are all abreviations of the actual tests that are being writen.

## Step 1

- Behaviours added towards the action state of the metronome's(is running or not)

## Step 2

- Behaviours added towards turning the metronome's light ON and OFF 

## Step 3

- Behaviours added towards the relationship between the click of the metronome and the color of the lights
- Beheaviour added towards stopping the metronome

## Step 4

- Refactor click function logic
- Cover the click function test to cover all clicks when beat = 4

### Build Setup

First you have to install quasar-cli

```bash
npm install -g quasar-cli
```

### Running

``` bash
git clone https://github.com/bruno-braga/metronome.git
cd metronome
npm install
```

### Commands

``` bash
# serve with hot reload at localhost:8080
quasar dev

# run unit tests
quasar test --unit
```
