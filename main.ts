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

    //% block="Microsecondes"
    export function microsecondes(): number {
        return control.micros();
    }
}

