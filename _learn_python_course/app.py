#******* First Script ***********
# # print("Hello World")
#******* Printing, Console and Order of operations ***********
# print("\033c", end="")
# print("    /|")
# print("   / |")
# print("  /  |")
# print(" /___|")

#************************ Variables ************************
# print("\033c", end="")

# ----storing variables example----
# char_name = "John"
# char_age = 25

# ----printing Strings and Variables concatenation example----
# print("")
# print("STORY TIME!")
# print(" ")
# print('There once was a man named',char_name,',')
# print(char_name,'is',char_age, 'years old.')
# print(char_name,'really likes being',char_age, 'years old,')
# print("but doesn't like the name", "'"+char_name+"'.")
# char_name = "OVERLORD"
# print("....So he legally changed his name to;", "'"+char_name+"'.")
# print("")
# print("END.")
# print("")


#************************ Data Types: String ************************
# print("\033c", end="")

# ----new lines in Strings example----
# print("String\nhaha")

# storing Variables example
# phrase = "String\nhaha"
# print(phrase)

# ----Strings and Variables concatenation example----
# phrase = "Strings"
# print(phrase + 'are cool')


# ----String Functions example----
# import time function
# from hashlib import new
# import numbers
# import time
# from tokenize import maybe

# phrase = 'Strings'

# # String to Lowercase function with lower()
# print('This string is in lowercase:',phrase.lower())

# # Test if String is uppercase with isupper()
# print('String Uppercase?',phrase.isupper())

# print('Converting to uppercase....')
# # call time.sleep() and enter a perameter to sleep for x seconds
# time.sleep(2)

# # convert the String to uppercase with upper() function, 
# # then save to the 'phrase' variable
# phrase = phrase.upper()

# # Test if String is uppercase
# print('String Uppercase?',phrase.isupper())
# time.sleep(1)

# print('Counting String Characters....')
# # call time.sleep() and enter a perameter to sleep/pause code for x seconds
# time.sleep(2)

# # Return a numbered-length for the number of characters within the parameter String
# print('This the number of Characters in the String are:', len(phrase));

# time.sleep(1)
# print('Printing the String-Character at the Index of the specified number....')
# # call time.sleep() and enter a perameter to sleep/pause code for x seconds
# time.sleep(2)

# # Indexing Lookup Function
# #  Parse a number to square-brackets[] to return the String-Character 
# #   at the position of the specified number
# print('Here is the Character at position two: ', phrase[2])
# time.sleep(1)

# print('Printing the Index number of the specified String-Character ....')
# # call time.sleep() and enter a perameter to sleep/pause code for x seconds
# time.sleep(2)

# # Index function example
# # Parse a String-Character to the index() function to return 
# # the index numerical position of that charcter
# letter = "G"
# print('Here is the Index number for letter',"'"+letter+"'",'in the phrase String:', phrase.index(letter))

# time.sleep(1)

# # Replace function example
# replce_txt = "Your String Variable Has Been Replaced!"
# # Parse the characters or String for the first parameter, 
# # then, parse a String to replace what was parsed in the first parameter
# print('You String called:', phrase+'. Will be replaced in 2 seconds...')
# time.sleep(2)
# print(phrase.replace(phrase, replce_txt))
# phrase = replce_txt

# time.sleep(1)

# print('Exiting running code in 10 seconds....')
# # sleep/pause for 10 seconds
# time.sleep(10)

# # clear the console window
# print("\033c", end="")

#************************ Data Types: Number ************************

# Printing Numbers example
# print(2)

# # As well as whole numbers you can print decmials
# print(2.098)

# # Printing negative numbers
# print(-2)

# # Printing Addition/Subtraction/Multiplication Sums
# print(3+4)
# print(3*4)
# print(3/4)

# # Order of Operation
# print(3*4(3+4))

# # Modulas Operator
# print(10 % 3)

# # storing in Variables
# my_num = 5
# print(my_num)

# Converting Numbers to Strings
# my_num = -5
# print(str(my_num))

# You can also convert Numbers to Strings by using a comma to add a Number to a String in a print() function
# print(my_num, "string")

# Common Number Function-----------------

# Return the absolute value with abs() function
# my_num = -5
# print('This is the absolute function returning the absolute value of the parsed Number, which is:', abs(my_num))


# To the power of, with pow() function
# val_one = 3
# val_two = 2
# print('')
# print('Return the equation of',"'",val_one,"'",'to the power of',"'",val_two,"'",', which is: ', pow(val_one, val_two))


# Compare Numbers with max() and min()
# new_num = 4
# orig_num = 10

# print('\nComparing',new_num,'to',orig_num,'This code will output the highest number, which is:',max(new_num, orig_num))
# time.sleep(1.2)
# print('\nComparing',new_num,'to',orig_num,'This code will output the lowest number, which is:',min(new_num, orig_num),'\n')


# Rounding Numbers with round()
# a_num = 27.7

# print('\nRounding this number ->',a_num,'to the nearest whole number example. Here is the returned result of the round() function:',round(a_num),'\n')



# example of importing modules
# from math import *


# # floor() method - rounds the number down
# numbr = 5.7
# print(floor(numbr))

# # ciel() method - rounds the number up
# numbr = 5.7
# print(ceil(numbr))

# # Square Root sqrt() method - returns the square root of a number
# numbr = 36
# print(sqrt(numbr))



#************************ Input and Data ************************

# Storing input inside variable
# name = input("Enter your name: ")
# age = input("Enter your age: ")

# print("Hello",name+"!", "\nYou are",age,"years old.")





# # Code Exit Script -----------
from loading_animation import loading_animation
loading_animation('exit')
