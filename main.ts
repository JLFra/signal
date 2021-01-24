//% color="#037268" icon="\uf335"
namespace signal {
    
    //% block="signal bouton A"
    export function signal_button_A(): number  {
        if (input.buttonIsPressed(Button.A)) {
            return 3.3;
        } else  {
            return 0;
        }
    }

    //% block="signal bouton B"
    export function signal_button_B(): number  {
        if (input.buttonIsPressed(Button.B)) {
            return 3.3;
        } else  {
            return 0;
        }
    }

    //% block="signal broche $analog_pin"
    //% analog_pin.defl = AnalogPin.P0
    export function signal_pin(analog_pin: AnalogPin): number  {
       return pins.analogReadPin(analog_pin)*3.3/1023
    }

    //% block="Microsecondes"
    export function microsecondes(): number {
        return control.micros();
    }
}

