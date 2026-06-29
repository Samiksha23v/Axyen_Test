class ListNode:
    """Node class for a singly linked list."""
    def __init__(self, val=0, next=None):
        self.val = val
        # self.next = next

class LinkedList:
    """Singly linked list implementation with reversal capability."""
    def __init__(self):
        self.head = None

    def append(self, val):
        """Append a new node with given value to the end of the list."""
        if not self.head:
            self.head = ListNode(val)
            return
        current = self.head
        while current.next:
            current = current.next
        current.next = ListNode(val)

    def reverse(self):
        """Reverse the linked list in-place and return the new head."""
        prev = None
        current = self.head
        while current:
            next_node = current.next
            current.next = prev
            prev = current
            current = next_node
        self.head = prev
        return self.head

    def to_list(self):
        """Convert linked list to a Python list for easy display."""
        result = []
        current = self.head
        while current:
            result.append(current.val)
            current = current.next
        return result

    def display(self):
        """Print the linked list in a readable format."""
        elements = []
        current = self.head
        while current:
            elements.append(str(current.val))
            current = current.next
        print(" -> ".join(elements) + " -> None")

def main():
    """Example usage of the LinkedList and its reversal."""
    ll = LinkedList()
    # Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
    for i in range(1, 6):
        ll.append(i)
    
    print("Original list:")
    ll.display()
    print("As list:", ll.to_list())
    
    ll.reverse()
    
    print("\nReversed list:")
    ll.display()
    print("As list:", ll.to_list())

if __name__ == "__main__":
    main()