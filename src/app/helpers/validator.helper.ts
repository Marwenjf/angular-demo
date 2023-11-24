import { Injectable } from "@angular/core";
import { ValidationErrors } from "@angular/forms";

@Injectable({
    providedIn:'root'
})
export class CustomError{
    constructor() {
    }

    public getErrorMessage(fieldName:string
        ,errors:ValidationErrors){
       if (errors['required']) {
        return fieldName+' is required'
       }
       else if(errors['minlength']){
          return fieldName+' should have at least '+errors['minlength']['requiredLength']+' Characters'
       }
       else if(errors['min']){
        return fieldName+' should have min value '+errors['min']['min']
       }
       else return ''
    }
}