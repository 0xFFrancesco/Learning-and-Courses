#!/bin/bash

echo "Hello bash scripting!"

# VARIABLES
echo ""
echo " 1 - VARIABLES"
echo "variables are global by default, to create a local variable use 'local VARNAME', local variables only works in functions"

VAR="my-var-value"
echo "This is a ${VAR} variable"

SAVED=$(ls);
echo "This is a '${SAVED}' variable with a saved command (ls) output."

# TEST
echo ""
echo " 2 - TESTS"
echo "tests are wrapped in square braces [ my-test ]"
# file operators: http://tldp.org/LDP/abs/html/fto.html
# others: http://tldp.org/LDP/abs/html/comparison-ops.html

if [ "$SAVED" = "script.sh" ]
then
 echo 'test passed'
else
 echo 'test not passed'
fi

# LOOPS
echo ""
echo " 3 - LOOPS"

for i in {0..5}
do
  echo "$i"
done

# PARAMETERS
echo ""
echo " 4 - PARAMETERS"
echo "calling a function like f my-arg, they can be accessed through \$1=arg1..\$n=argN"

function testArg(){
  echo "here the \$1 argument: $1"
}

testArg my-arg

echo "your can loop through arguments with for VAR in \$@"

function testArg(){
  for VAR in $@
  do
    echo "here the argument: $VAR"
  done
}

testArg my-arg my-arg2 my-arg3

# RECEIVING INPUT
echo ""
echo  " 5 - RECEIVING INPUT (STDIN)"

function testPromp(){
  read -p "Type something " TYPED
  echo "Here what you typed $TYPED"
}

testPromp

# EXIT CODES
echo ""
echo  " 6 - EXIT CODES"
echo  "Exit codes ranges from 0 to 255, where 0=success and 1+=some kind of error"
echo "\$? is a variable that helds the exit code of the previous command"

# AND and OR
echo ""
echo  " 7 - AND and OR"
echo  "AND=&&, OR=||"
echo "command1 && command2, command2 will execute only if command1 exited with a status code of 0 (success)"
echo "command1 || command2, command2 will execute only if command1 exited with a status code greater than 0 (failed)"
echo "command1 ; command2, command2 will always execute, it doesn't matter the exit code of the previous command"

# FUNCTIONS
echo ""
echo  " 8 - FUNCTIONS"
echo "declaren it with functionName(){/code/}"
echo "to call a function just call it without parenthesis, functionName arg1 arg2"
echo "access parameter with \$1..\$N or \$@"
echo "they can return only a number, 'return EXITCODE'"

# WILDCARDS
echo ""
echo  " 9 - WILDCARDS"
echo "they are patterns used to find files and directories"
echo "they can be used with most if the linux commands"
echo "* = match 0 or more characters, es *.txt"
echo "? = match just one character, es ?.txt"
echo "[] = match just one character defined inside the brackets, es [ab].txt"
echo "[!] = match just one character, the ones defined inside the brackets are excluded, es [!ab].txt"

# CASE STATEMENTS
echo ""
echo  " 10 - CASE STATEMENTS"
echo "case statements are case sensitive"
read -p "Enter y or n: " CASEVAR
case "$CASEVAR" in
  [yY]|yes|YES)
    echo 'you said yes'
  ;;
  [nN]|no|NO)
    echo 'you said no'
  ;;
  *)
    echo 'default, invalid answer'
  ;;
esac

# LOGGING
echo ""
echo  " 11 - LOGGING"
echo "Linux uses the syslog standard (Facilities and Severities)"
echo "refert to the logger command 'logger -p Facility.Severity \"My Message\"'"
echo ""

# WHILE LOOP
echo ""
echo  " 12 - WHILE LOOP"
WHILEVAR=1
while [ $WHILEVAR -lt 6 ]
do
  echo $WHILEVAR
  # you can inclose mathematical operations in double parenthesis
  ((WHILEVAR++))
done

# CHECK FOR A USER INPUT
while [ "$CORRECT" != "y" ]
do
  read -p "Enter your name: " NAME
  read -p "Is ${NAME} correct?(y/n) " CORRECT
done
echo "to exit a loop without having his condition to false, you can use the 'break' keyword"
echo "to go to the next loop iteration before finishing all the commands, you can use the 'continue' keyword"

# DEBUGGING
echo ""
echo  " 12 - DEBUGGING"
echo "with the -x option (bash built-in) you can print commands and their arguments"
echo "to use that use 'set -x' to start, 'set +x' to stop the tracing"
echo "you can include that option directly in the shebang '#!/bin/bash/ -x'"

set -x
VARSETX='-x'
echo "test with ${VARSETX} sat"
set +x

echo 'with the -e option, the program exit when it finds the first error'
