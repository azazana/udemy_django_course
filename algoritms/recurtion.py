def sum(item: list):
    if len(item) == 0:
        return 0
    else:
        return item[0] + sum(item[1:])


def count(item: list):
    if item == []:
        return 0
    else:
        return 1 + count(item[:-1])


i = None


def maximum(items: list):
    if len(items) == 1:
        return items[0]
    else:
        if items[0] > items[1]:
            items[1] = items[0]
        return maximum(items[1:])


def quicksort(items):
    if len(items) <= 1:
        return items
    else:
        opr = items[0]
        less = [i for i in items[1:] if i<opr]
        more = [i for i in items[1:] if i>opr]
        return (quicksort(less)+[opr]+quicksort(more))


