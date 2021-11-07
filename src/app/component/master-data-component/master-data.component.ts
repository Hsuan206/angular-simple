import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/api';
import { NgForm } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { Config } from './config';
import { ConfigService } from './config.component.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'master-data',
    templateUrl: 'master-data.component.html',
    styleUrls: ['master-data.component.css'],
    providers: [ConfirmationService]
})

export class MasterDataComponent implements OnInit {
    // public editConfig: Config;
    configs: Config[];
    msgs: Message[] = [];
    position: string;
    columnDefs: ColDef[] = [
        {
            field: '廠',
            filter: 'agTextColumnFilter'
        },
        { field: '區' },
        { field: '料號' },
        { field: '批號' }
    ];

    rowData = [
        { 廠: 'P3', 區: 'A', 料號: '35000', 批號: '35000' },
        { 廠: 'P3', 區: 'A', 料號: '32000', 批號: '35000' },
        { 廠: 'P3', 區: 'A', 料號: '72000', 批號: '35000' }
    ];
    gridOptions = {
        // PROPERTIES
        // Objects like myRowData and myColDefs would be created in your application
        rowData: this.rowData,
        columnDefs: this.columnDefs,
        pagination: true,
        rowSelection: 'single'

    }
    defaultColDef = {
        // set filtering on for all columns
        filter: true,
    };
    public newRowData: Config[]
    constructor(private configService: ConfigService, private confirmationService: ConfirmationService) {
    }
    ngOnInit() {
        this.configService.getConfigs().subscribe((response) => {
            this.newRowData = response
            // response.forEach(function(config){
            //     Object.keys(config).forEach(function(key) {
            //         config[key]
            //     });
            // })
            // this.gridOptions.rowData = 
        },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }
    confirmDelete() {
        this.confirmationService.confirm({
            message: 'Are you sure that you want to proceed?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' }];
            },
            reject: () => {
                this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
            }
        });
    }
    public onAddConfig(addForm: NgForm): void {
        const form = document.getElementById('add-config-form');
        if (form) form.click();
        this.configService.addConfig(addForm.value).subscribe(
            (response: Config) => {
                console.log(response);
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }
    onUpload(event: any){
        console.log(event.files);
        this.configService.uploadFile(event.files[0]).subscribe((response: any) => {
            console.log(response);
        },
            (error: HttpErrorResponse) => {
                alert(error.message);
            })
    }
    public onOpenModal(config?: Config, mode?: string): void {
        const container = document.getElementById('main-container');
        const button = document.createElement('button');
        button.type = 'button';
        button.style.display = 'none';
        button.setAttribute('data-toggle', 'modal');
        if (mode === 'add') {
            button.setAttribute('data-target', '#addConfigModal');
        }
        if (mode === 'edit') {
            //   if(config)this.editConfig = config;
            button.setAttribute('data-target', '#updateConfigModal');
        }
        if (container) container.appendChild(button);
        button.click();
    }
}                                   