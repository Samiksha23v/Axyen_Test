# Linked List Reversal in Python

A complete implementation of a singly linked list with both iterative and recursive reversal methods.

## Features

- **Complete Linked List Implementation**: Full-featured singly linked list with append, prepend, and display methods
- **Two Reversal Methods**:
  - Iterative reversal (O(n) time, O(1) space)
  - Recursive reversal (O(n) time, O(n) space)
- **Edge Case Handling**: Works correctly with empty lists, single elements, and multiple data types
- **Comprehensive Tests**: Full unit test coverage with multiple test cases

## Files

- `linked_list.py` - Core linked list implementation with Node and LinkedList classes
- `reverse_linked_list.py` - Main demonstration script showing various use cases
- `test_linked_list.py` - Unit tests for all functionality
- `README.md` - This documentation file

## Usage

### Basic Example

```python
from linked_list import LinkedList

# Create a linked list
ll = LinkedList()

# Add elements
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)

print(f"Original: {ll}")  # Output: 1 -> 2 -> 3 -> 4 -> 5

# Reverse using iterative method
ll.reverse()
print(f"Reversed: {ll}")  # Output: 5 -> 4 -> 3 -> 2 -> 1

# Reverse using recursive method
ll.reverse_recursive()
print(f"Reversed again: {ll}")  # Output: 1 -> 2 -> 3 -> 4 -> 5
```

### Running the Demo

```bash
python reverse_linked_list.py
```

### Running Tests

```bash
python test_linked_list.py
```

Or with verbose output:

```bash
python test_linked_list.py -v
```

## API Reference

### Node Class

```python
Node(data)
```

Represents a single node in the linked list.

**Attributes:**
- `data`: The value stored in the node
- `next`: Reference to the next node (or None)

### LinkedList Class

```python
LinkedList()
```

Represents a singly linked list.

**Methods:**

- `append(data)` - Add element to the end of the list
- `prepend(data)` - Add element to the beginning of the list
- `reverse()` - Reverse the list in-place (iterative)
- `reverse_recursive()` - Reverse the list using recursion
- `display()` - Return list representation of elements
- `is_empty()` - Check if the list is empty
- `__len__()` - Get the length of the list
- `__str__()` - Get string representation

## Algorithm Explanation

### Iterative Reversal

The iterative method uses three pointers to reverse the links:

1. `prev` - Initially None, becomes the new head
2. `current` - Starts at head, traverses the list
3. `next_node` - Temporarily stores the next node

**Time Complexity:** O(n)  
**Space Complexity:** O(1)

### Recursive Reversal

The recursive method reverses the list by:

1. Recursively reaching the end of the list
2. Reversing links on the way back
3. Returning the new head

**Time Complexity:** O(n)  
**Space Complexity:** O(n) due to call stack

## Edge Cases Handled

- Empty list reversal
- Single element list
- Two element list
- Multiple data types (integers, strings, objects)
- Multiple reversals

## Requirements

- Python 3.6 or higher
- No external dependencies required

## License

This is a demonstration project for educational purposes.
