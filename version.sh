#!/bin/bash

version=$(git describe --abbrev=0 --tags)
change=$(git log --no-merges --pretty=format:'%H' -n 1)
date=$(git log -1 --no-merges --date=short --pretty=format:%cd)

cat << EOF
// VERSION
Meteor.settings.public.version = "${version:1:5}";
Meteor.settings.public.change = "${change::8}";
Meteor.settings.public.date = "$date";
EOF
