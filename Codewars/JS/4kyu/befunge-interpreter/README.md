# Befunge Interpreter

https://www.codewars.com/kata/526c7b931666d07889000a3c/javascript

Esoteric languages are pretty hard to program, but it's fairly interesting to write interpreters for them!

Your task is to write a method which will interpret Befunge-93 code! Befunge-93 is a language in which the code is presented not as a series of instructions, but as instructions scattered on a 2D plane; your pointer **starts at the top-left corner** and defaults to **moving** right through the code. Note that the instruction pointer **wraps** around the screen! There is a singular stack which we will assume is unbounded and only contain integers. While Befunge-93 code is supposed to be restricted to 80x25, you need not be concerned with code size.