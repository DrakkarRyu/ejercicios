"""First we are importing the files that are necessary for to work"""
from Queue import Queue # Importing the class Queue from the file Queue.py it have the basic structure of a queue
from Printer import Printer # Importing the class Printer from the file Printer.py it have necesary funtions for to work with printer
from Task import Task # Importing the class Task from the file Task.py it have the basic structurure of a task

import random # Importing the necessary function from python (reserved word)


def simulation(num_seconds, pages_per_minute): # We are making a function where we will receive 2 parameters, num_seconds and pages_per_minute

    lab_printer = Printer(pages_per_minute)# Define a variable where we call the class Printer and in this we will receive the parameter pages_per_minute that are the number of pages that can print per min
    print_queue = Queue() #Define a new variable where we'll call the class Queue
    waiting_times = [] #Define a new variable but now we'll have an empty list

    for currentSecond in range(num_seconds): #We'll tour the list with a cicle for and using a range (also is a reserved word) that are the seconds that we received as num_seconds 
        #with this conditional we'll know if the printer is queue 
        if new_print_task():#We'll make a conditional if where we'll make a new function
            task = Task(currentSecond)# we'll make a new variable where we'll call the class Task (function from Taks.py) and in this function we'll receive a number that will be int
            print_queue.enqueue(task)# now we'll work with the varial and in this it execute the function enqueue (function where we will insert a new item, it's from the file Queue.py) and this will receive the params task
        #In this conditional we'll be sure that the printer not is busy (funtion from the file Printer.py) and the queue for to print is not empty (function from the file Queue,py)
        if (not lab_printer.busy()) and (not print_queue.is_empty()):
            next_task = print_queue.dequeue() #we will create a new task where we will remove the first item from the task [item to delete, item, item, item] 
            waiting_times.append(next_task.wait_time(currentSecond)) # we will add a new item to the list to the end of the queue
            lab_printer.start_next(next_task)# updating the number of pages per minute for to print  

        lab_printer.tick() # updating the remaining time for to print 

    average_wait = sum(waiting_times)/len(waiting_times) #making a new variable where we calculate the average time for to wait 
    print("Average Wait %6.2f secs %d tasks remaining." % (average_wait, print_queue.size())) # we print a message where say how many time need to wait for to get your pages that will be printed 


def new_print_task():
    num = random.randrange(1, 181)
    if num == 180:
        return True
    else:
        return False


for i in range(10):
    simulation(3600, 5)