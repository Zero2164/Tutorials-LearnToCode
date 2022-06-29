# Importing Script Dependencies 
import itertools
import threading
import time
import sys
import operator

# Clear the terminal window to present script code
print("\033c", end="")

# Define Loading Animation Function
def loading_animation(opt):
    done = False
    def animate(load_msg, exit_msg):
    # def animate():
        print('')
        for c in itertools.cycle(['|', '/', '-', '\\']):
            if done:
                break
            sys.stdout.write(load_msg + c)
            sys.stdout.flush()
            time.sleep(0.1)
        print(exit_msg)
        time.sleep(1.6)


    def play_animate(load_msg, exit_msg):
        t = threading.Thread(target=animate, args=(load_msg, exit_msg))
        t.start()

    # loading option
    if opt == 'load':
        play_animate('\rLoading Output ', '\n \n**** Loading Complete. Here are the results: **** \n')
        time.sleep(1)
        done = True

    # exit code option 
    if opt == 'exit':
        inpt_end_script = input('\nClear script output before closing? (y/n):')

        if inpt_end_script == 'y':
            play_animate('\033c \rClearing yo stinky history, holdup... ', '\033c Terminal history cleared, BYE!!')
            time.sleep(1)
            done = True
            time.sleep(1.6)
            print("\033c", end="")
        if inpt_end_script == 'n' :
            print('\n**** Ok above this line is previous script output. Have a great day. ****\n')
    

# Mad Libs App Code
def app():
    # Define Variables
    color = input('Enter a color: ')
    plural_noun = input('Enter a Plural Noun: ')
    celebrity = input('Enter a Celebrity: ')
    # Start Loading Animation
    loading_animation('load')
    time.sleep(1)
    # Display Results
    print('Roses are',color)
    print(plural_noun,'are blue')
    print('I love',celebrity)

# Run MadLibs Main App code
app()

# loading_animation('exit')
loading_animation('exit')