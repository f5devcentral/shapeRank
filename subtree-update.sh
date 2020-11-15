#!/bin/sh 

git subtree pull --prefix primordialsoup https://github.com/newspeaklanguage/primordialsoup extraRevs --squash
git subtree pull --prefix newspeak https://github.com/newspeaklanguage/newspeak master --squash
