 


 
export const selectElement = document.querySelector('.header__select') as HTMLSelectElement;
const logoElement = document.querySelector('.header__logo') as HTMLElement;
const calculatorGrayBtns = document.querySelectorAll('.btn__gray') as NodeListOf<HTMLElement>;
const calculator = document.querySelector(".calculator__inner") as HTMLDivElement
const calculatorOrangeBtns = document.querySelectorAll('.btn__orange') as NodeListOf<HTMLElement>;
const calculatorLightGrayBtns = document.querySelectorAll('.btn_grayLight') as NodeListOf<HTMLElement>;

export function applyTheme(theme: string): void {
    if (theme === 'dark') {

        document.body.style.backgroundColor = "#1f1e1e"
        logoElement.style.color = '#ffffff';

        calculatorLightGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#646464"

        })
        calculatorGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#3d3d3d"
        })
        calculator.style.backgroundColor = "#535353"
        calculatorOrangeBtns.forEach(btn => {
            btn.style.backgroundColor = "#ff9f0a"
        })

    } else {
        document.body.style.backgroundColor = "#ffffff";
        logoElement.style.color = '#1f1e1e'

        calculatorLightGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#7d7d7d"

        })
        calculatorGrayBtns.forEach(btn => {
            btn.style.backgroundColor = "#646464"
        })
        calculator.style.backgroundColor = "#e6e6e6"

        calculatorOrangeBtns.forEach(btn => {
            btn.style.backgroundColor = "#cf7f07"
        })
    }
}


 