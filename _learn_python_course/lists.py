def app():
    # # Define Array(List) 
    # # accepts all data types
    # # friends=['Max', 2]
    # friends=['Max', 'Alistair', 'Chris']

    # # Access elements from indexed position with positive and negative values
    # print(friends[-1]) #prints 'Chris'
    # print(friends[0]) #prints 'Max'

    # # Selec trailing elements at specified index position in reverse or sequential order
    # print(friends[1:])
    # print(friends[:-1])


    # # Define more friends for range example
    # friends=['Max', 'Alistair', 'Chris', 'Tyson', 'Bryce', 'Georgia']

    # # Select a range of elements in the list
    # print(friends[1:6])

    # ******** Using functions with Lists example ********
    # Define more friends for example
    friends=['Max', 'Alistair', 'Chris', 'Tyson', 'Bryce', 'Georgia']
    # Define Numbers List
    lucky_numbers=[4, 8, 15, 16, 32, 42]

    # using the extend function to add an addtional list to the end of the list
    # friends.extend(lucky_numbers)

    # using append function to add an element to the end of a list
    # friends.append('Ben')

    # using the insert function to insert an element at the specified index position
    friends.insert(1, 'Ben')

    # using the remove function to remove the matching string element from the list
    friends.remove('Georgia')
    friends.remove('Bryce')

    # using the clear function to empty the list
    # friends.clear()

    # using the pop function to remove an element from the end of a list
    friends.pop()

    # using the index function to find an element at the specified index within the list
    # print('\033cHere is the indexed position within the friends list of my boss, Ben:',friends.index("Ben"))

    # using the count function to count how many times the specified string is stated in the list
    friends.clear()
    friends.append(('Max',)*5)
    print('\033cResult of how many times Max is specified in the list:',friends.count('Max'))


    # Print Result
    print('\nHere is my full list of work friends:',friends,'\n')

# Run main app code
app()