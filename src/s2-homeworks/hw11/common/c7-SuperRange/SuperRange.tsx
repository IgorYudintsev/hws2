import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    //console.log(props)
    // const [value, setValue] = React.useState<number>(0);
    // console.log(value)

    // const handleChange = (event: Event, newValue: number | number[]) => {
    //     setValue(newValue as number);
    // };

    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange


//--------------------------------------------------------------------------------------------

// import React from 'react'
// import {Slider, SliderProps} from '@mui/material'
//
// const SuperRange: React.FC<SliderProps> = (props) => {
//     return (
//         <Slider
//             sx={{ // стили для слайдера // пишет студент
//
//             }}
//             {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
//         />
//     )
// }
//
// export default SuperRange