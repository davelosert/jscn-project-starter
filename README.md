# JavaScript Coding Nights - Project Starter

This is a shared framework for JSCN meetup projects.  

It contains a number of challenges tailored toward experimenting with and learning different technologies via a variety of available application "challenges" to build.

Futher, projects can live over time in one place, and more importantly (for me :)) it will allow for infrastructure reuse going forward.

**It is recommended that you (star and) fork this repository**

## Available Challenges

* [US President Voting App](/challenges/us-presidents.md) - Create a voting app and choose the next leader of the free world!


## Challenge Setup

### Step 1: Fork & clone this repository.

```
git clone https://github.com/jscodingnights/jscn-project-starter.git
```

### Step 2 (optional): Create a branch for your work on the night's task:

```
git checkout -b us-presidents
```

### Step 3: Create the project from one of the client starters

For example, if you're working on the **us-presidents** challenge, and you want to use the `React` client starter, copy the contents of the `starters/React` folder into `/challenges/us-presidents`:

```
cp -R ./starters/React/. ./challenges/us-presidents
```

### Step 4: Initial commit

```
git add --all
git commit -m "Initial Commit"
```

### Step 5: Open your project, npm install, and start coding!

```
cd challenges/us-presidents
npm install
npm start
```
