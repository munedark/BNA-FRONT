import {  ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['column1', 'column2', 'column3']; // Define column names
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Define page size options
  pageSize: number = 5; // Set default page size
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cdr: ChangeDetectorRef) {
    this.dataSource = new MatTableDataSource<any>([]); // Specify any as the type
  }

  ngOnInit(): void {
    const data: any[] = [ // Specify any as the type for data
    { column1: 'value1', column2: 'value2', column3: 'value3' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    { column1: 'value4', column2: 'value5', column3: 'value6' },
    // Add more data as needed
  ];
  this.dataSource = new MatTableDataSource<any>(data);
  this.cdr.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
