# uk-vehicle-number-format
### Light weight uk vehicle registration validator and formatter

Validates UK and Isle of Man issued vehicle registration numbers against known formats.

`npm i uk-vehicle-number-format`

Formats unspaced numbers e.g
```
    format(A1) // returns A 1
    format(A100) // returns A1 100
    format(AB1000) // returns AB 1000
    format(A1ABC) // returns A1 ABC
    format(AA11ABC) // returns AA11 ABC
```

Validates unspaced numbers
```
    validate(A1) // returns true
    validate(A12) // returns true
    validate(A123) // returns true
    validate(A1234) // returns true
    validate(AB1) // returns true
    validate(AB12) // returns true
    validate(AB123) // returns true
    validate(AB1234) // returns true
    validate(ABC1) // returns true
    validate(ABC12) // returns true
    validate(ABC123) // returns true
    validate(MAN1234) // returns true IoM must ocntain MAN
    validate(MIB1234) // returns true NI must contain I or Z
    validate(ABC1D) // returns true
    validate(ABC12D) // returns true
    validate(ABC123D) // returns true
    validate(A1BCD) // returns true
    validate(A12BCD) // returns true
    validate(A123BCD) // returns true
    validate(AB12CDE) // returns true
    validate(123D456) // returns true (diplomatic)
```
