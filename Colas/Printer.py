class Printer:
    def __init__(self, ppm):
	# Pages printed per minute
        self.page_rate = ppm 
	# The printer will start with None 
        self.current_task = None
    # The necesary time for to print a page will have as initial time 0
        self.time_remaining = 0

    def tick(self):
    #Conditional where the current task not have a value None
        if self.current_task is not None:
            #if the conditional is validated we'll make an arimethic operation where the remaining time will be subtracted 1 minute
            self.time_remaining = self.time_remaining - 1
            #Making a conditional where the remaining time is less than or equal to 0 
            if self.time_remaining <= 0:
                #if the conditinal is validated, it mean that our current task not have anything
                self.current_task = None

    def busy(self):
        #we will see that our current task is not with value None
        if self.current_task is not None:
            #if it is validated we will return a boolean True
            return True
        #if it is no validated it mean that our current task have as value None so it will pass to else
        else:
            #this else will resturn a boolean False
            return False

    def start_next(self, new_task):
        # We'll have a new value for our variable current_task where the new value we'll receive as params  with the name new_task 
        self.current_task = new_task
        # Now we will calculate our remaining time with our formule
        self.time_remaining = new_task.get_pages() * 60/self.page_rate # remaining time = all pages that have new_task * pages per minute 