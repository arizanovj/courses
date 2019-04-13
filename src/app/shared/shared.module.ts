import {NgModule}           from '@angular/core';
import {CommonModule}       from '@angular/common';
import{ MatInputModule,MatButtonModule,  MatSlideToggleModule,MatIconModule,MatMenuModule,MatSelectModule,MatDatepickerModule,MatProgressBarModule,MatProgressSpinnerModule,MatDialogModule, MatCheckboxModule, MatTableModule, MatAutocomplete, MatAutocompleteModule, MatCardModule, MatToolbar, MatToolbarModule} from '@angular/material';


@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatDatepickerModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCardModule,
        MatToolbarModule
    ],
    declarations: [

    ],
    exports: [

        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatDatepickerModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatInputModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule,
        MatAutocompleteModule,
        MatCardModule,
        MatToolbarModule

    ],
    providers: [
    
    ],

})
export class SharedModule {
}