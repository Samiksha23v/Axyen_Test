class Node:
    """A node in a singly linked list."""
    
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    """A singly linked list implementation with reverse functionality."""
    
    def __init__(self):
        self.head = None
    
    def append(self, data):
        """Add a new node with the given data to the end of the list."""
        new_node = Node(data)
        
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def prepend(self, data):
        """Add a new node with the given data to the beginning of the list."""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node
    
    def reverse(self):
        """Reverse the linked list in-place (iterative approach)."""
        prev = None
        current = self.head
        
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        
        self.head = prev
    
    def reverse_recursive(self):
        """Reverse the linked list using recursion."""
        def _reverse_recursive_helper(current, prev):
            if not current:
                return prev
            
            next_node = current.next
            current.next = prev
            return _reverse_recursive_helper(next_node, current)
        
        self.head = _reverse_recursive_helper(self.head, None)
    
    def display(self):
        """Return a list representation of the linked list."""
        elements = []
        current = self.head
        
        while current:
            elements.append(current.data)
            current = current.next
        
        return elements
    
    def __str__(self):
        """Return a string representation of the linked list."""
        elements = self.display()
        return ' -> '.join(map(str, elements)) if elements else 'Empty List'
    
    def __len__(self):
        """Return the length of the linked list."""
        count = 0
        current = self.head
        
        while current:
            count += 1
            current = current.next
        
        return count
    
    def is_empty(self):
        """Check if the linked list is empty."""
        return self.head is None
