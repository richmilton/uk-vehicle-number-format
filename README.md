# uk-vehicle-number-format
### Light weight uk vehicle registration validator and formatter

Validates UK and Isle of Man issued vehicle registration numbers against known formats.

Formats unspaced numbers e.g
```
    format(A1) // returns A 1
    format(A100) // returns A1 100
    format(AB1000) // returns AB 1000
    format(A1ABC) // returns A1 ABC
    format(AA11ABC) // returns AA11 ABC
```
