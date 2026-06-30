#!/usr/bin/env python3
"""Script to demonstrate reversing a linked list."""

from linked_list import LinkedList


def main():
    """Main function to demonstrate linked list reversal."""
    
    # Create a linked list
    print("Creating a linked list...")
    ll = LinkedList()
    
    # Add elements
    elements = [1, 2, 3, 4, 5]
    for element in elements:
        ll.append(element)
    
    print(f"Original list: {ll}")
    print(f"Length: {len(ll)}")
    print()
    
    # Reverse using iterative method
    print("Reversing the list (iterative method)...")
    ll.reverse()
    print(f"Reversed list: {ll}")
    print()
    
    # Reverse back using recursive method
    print("Reversing the list again (recursive method)...")
    ll.reverse_recursive()
    print(f"Reversed list: {ll}")
    print()
    
    # Demonstrate with different data types
    print("Creating a linked list with strings...")
    string_ll = LinkedList()
    words = ['apple', 'banana', 'cherry', 'date']
    for word in words:
        string_ll.append(word)
    
    print(f"Original: {string_ll}")
    string_ll.reverse()
    print(f"Reversed: {string_ll}")
    print()
    
    # Edge case: single element
    print("Testing edge case: single element...")
    single_ll = LinkedList()
    single_ll.append(42)
    print(f"Original: {single_ll}")
    single_ll.reverse()
    print(f"Reversed: {single_ll}")
    print()
    
    # Edge case: empty list
    print("Testing edge case: empty list...")
    empty_ll = LinkedList()
    print(f"Original: {empty_ll}")
    print(f"Is empty: {empty_ll.is_empty()}")
    empty_ll.reverse()
    print(f"Reversed: {empty_ll}")


if __name__ == '__main__':
    main()
