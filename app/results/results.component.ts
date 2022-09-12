import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  title = 'Angular Paginator';
  currentPage = 1;
  itemsPerPage = 24;
  maxSize = 5;
  jsonArray = jsonArray;
  constructor() { }

  ngOnInit(): void {
  }

}

const jsonArray = [{
  'name': 'Manjunatha Swami.M.T',
  'src': "../../assets/results/image001.jpg",
  'designation': "KAS"
}, {
  'name': 'Chandan.J.Patil',
  'src': "../../assets/results/image002.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Amitha G',
  'src': "../../assets/results/image003.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Umapathi B.N',
  'src': "../../assets/results/image004.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Kavitha.S',
  'src': "../../assets/results/image005.jpg",
  'designation': "Geologist"  
}, {
  'name': 'Kavya.S.V',
  'src': "../../assets/results/image006.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Radha.M',
  'src': "../../assets/results/image007.jpg",
  'designation': "PSI"  
}, {
  'name': 'Sharath K S',
  'src': "../../assets/results/image008.jpg",
  'designation': "PSI"  
}, {
  'name': 'Ganesh P',
  'src': "../../assets/results/image009.jpg",
  'designation': "PSI"  
}, {
  'name': 'Naveen Naik',
  'src': "../../assets/results/image010.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Sunil Pawar',
  'src': "../../assets/results/image011.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Purushottam',
  'src': "../../assets/results/image012.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Shreedhara',
  'src': "../../assets/results/image013.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Manjunatha Naik',
  'src': "../../assets/results/image014.jpg" ,
  'designation': "KSISF" 
}, {
  'name': 'Dhananjay Murthy.G.N',
  'src': "../../assets/results/image015.jpg",
  'designation': "Professor"  
}, {
  'name': 'Yatish Kumar.M',
  'src': "../../assets/results/image016.jpg",
  'designation': "Professor"  
}, {
  'name': 'Nagarthna.H.',
  'src': "../../assets/results/image017.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Lokesh Naik',
  'src': "../../assets/results/image018.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Shivakumar',
  'src': "../../assets/results/image019.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Vimala',
  'src': "../../assets/results/image020.jpg" ,
  'designation': "FDA" 
}, {
  'name': 'Manjunatha.T',
  'src': "../../assets/results/image021.jpg" ,
  'designation': "SDA" 
}, {
  'name': 'Kavitha D',
  'src': "../../assets/results/image022.jpg" ,
  'designation': "PDO" 
}, {
  'name': 'Nandini K M',
  'src': "../../assets/results/image023.jpg",
  'designation': "SDA" 
}, {
  'name': 'Chandra Naik',
  'src': "../../assets/results/image024.jpg",
  'designation': "FDA" 
},{
  'name': 'Manjunatha Swami.M.T',
  'src': "../../assets/results/image001.jpg",
  'designation': "KAS"
}, {
  'name': 'Chandan.J.Patil',
  'src': "../../assets/results/image002.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Amitha G',
  'src': "../../assets/results/image003.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Umapathi B.N',
  'src': "../../assets/results/image004.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Kavitha.S',
  'src': "../../assets/results/image005.jpg",
  'designation': "Geologist"  
}, {
  'name': 'Kavya.S.V',
  'src': "../../assets/results/image006.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Radha.M',
  'src': "../../assets/results/image007.jpg",
  'designation': "PSI"  
}, {
  'name': 'Sharath K S',
  'src': "../../assets/results/image008.jpg",
  'designation': "PSI"  
}, {
  'name': 'Ganesh P',
  'src': "../../assets/results/image009.jpg",
  'designation': "PSI"  
}, {
  'name': 'Naveen Naik',
  'src': "../../assets/results/image010.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Sunil Pawar',
  'src': "../../assets/results/image011.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Purushottam',
  'src': "../../assets/results/image012.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Shreedhara',
  'src': "../../assets/results/image013.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Manjunatha Naik',
  'src': "../../assets/results/image014.jpg" ,
  'designation': "KSISF" 
}, {
  'name': 'Dhananjay Murthy.G.N',
  'src': "../../assets/results/image015.jpg",
  'designation': "Professor"  
}, {
  'name': 'Yatish Kumar.M',
  'src': "../../assets/results/image016.jpg",
  'designation': "Professor"  
}, {
  'name': 'Nagarthna.H.',
  'src': "../../assets/results/image017.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Lokesh Naik',
  'src': "../../assets/results/image018.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Shivakumar',
  'src': "../../assets/results/image019.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Vimala',
  'src': "../../assets/results/image020.jpg" ,
  'designation': "FDA" 
}, {
  'name': 'Manjunatha.T',
  'src': "../../assets/results/image021.jpg" ,
  'designation': "SDA" 
}, {
  'name': 'Kavitha D',
  'src': "../../assets/results/image022.jpg" ,
  'designation': "PDO" 
}, {
  'name': 'Nandini K M',
  'src': "../../assets/results/image023.jpg",
  'designation': "SDA" 
}, {
  'name': 'Chandra Naik',
  'src': "../../assets/results/image024.jpg",
  'designation': "FDA" 
},{
  'name': 'Manjunatha Swami.M.T',
  'src': "../../assets/results/image001.jpg",
  'designation': "KAS"
}, {
  'name': 'Chandan.J.Patil',
  'src': "../../assets/results/image002.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Amitha G',
  'src': "../../assets/results/image003.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Umapathi B.N',
  'src': "../../assets/results/image004.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Kavitha.S',
  'src': "../../assets/results/image005.jpg",
  'designation': "Geologist"  
}, {
  'name': 'Kavya.S.V',
  'src': "../../assets/results/image006.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Radha.M',
  'src': "../../assets/results/image007.jpg",
  'designation': "PSI"  
}, {
  'name': 'Sharath K S',
  'src': "../../assets/results/image008.jpg",
  'designation': "PSI"  
}, {
  'name': 'Ganesh P',
  'src': "../../assets/results/image009.jpg",
  'designation': "PSI"  
}, {
  'name': 'Naveen Naik',
  'src': "../../assets/results/image010.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Sunil Pawar',
  'src': "../../assets/results/image011.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Purushottam',
  'src': "../../assets/results/image012.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Shreedhara',
  'src': "../../assets/results/image013.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Manjunatha Naik',
  'src': "../../assets/results/image014.jpg" ,
  'designation': "KSISF" 
}, {
  'name': 'Dhananjay Murthy.G.N',
  'src': "../../assets/results/image015.jpg",
  'designation': "Professor"  
}, {
  'name': 'Yatish Kumar.M',
  'src': "../../assets/results/image016.jpg",
  'designation': "Professor"  
}, {
  'name': 'Nagarthna.H.',
  'src': "../../assets/results/image017.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Lokesh Naik',
  'src': "../../assets/results/image018.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Shivakumar',
  'src': "../../assets/results/image019.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Vimala',
  'src': "../../assets/results/image020.jpg" ,
  'designation': "FDA" 
}, {
  'name': 'Manjunatha.T',
  'src': "../../assets/results/image021.jpg" ,
  'designation': "SDA" 
}, {
  'name': 'Kavitha D',
  'src': "../../assets/results/image022.jpg" ,
  'designation': "PDO" 
}, {
  'name': 'Nandini K M',
  'src': "../../assets/results/image023.jpg",
  'designation': "SDA" 
}, {
  'name': 'Chandra Naik',
  'src': "../../assets/results/image024.jpg",
  'designation': "FDA" 
},{
  'name': 'Manjunatha Swami.M.T',
  'src': "../../assets/results/image001.jpg",
  'designation': "KAS"
}, {
  'name': 'Chandan.J.Patil',
  'src': "../../assets/results/image002.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Amitha G',
  'src': "../../assets/results/image003.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Umapathi B.N',
  'src': "../../assets/results/image004.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Kavitha.S',
  'src': "../../assets/results/image005.jpg",
  'designation': "Geologist"  
}, {
  'name': 'Kavya.S.V',
  'src': "../../assets/results/image006.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Radha.M',
  'src': "../../assets/results/image007.jpg",
  'designation': "PSI"  
}, {
  'name': 'Sharath K S',
  'src': "../../assets/results/image008.jpg",
  'designation': "PSI"  
}, {
  'name': 'Ganesh P',
  'src': "../../assets/results/image009.jpg",
  'designation': "PSI"  
}, {
  'name': 'Naveen Naik',
  'src': "../../assets/results/image010.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Sunil Pawar',
  'src': "../../assets/results/image011.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Purushottam',
  'src': "../../assets/results/image012.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Shreedhara',
  'src': "../../assets/results/image013.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Manjunatha Naik',
  'src': "../../assets/results/image014.jpg" ,
  'designation': "KSISF" 
}, {
  'name': 'Dhananjay Murthy.G.N',
  'src': "../../assets/results/image015.jpg",
  'designation': "Professor"  
}, {
  'name': 'Yatish Kumar.M',
  'src': "../../assets/results/image016.jpg",
  'designation': "Professor"  
}, {
  'name': 'Nagarthna.H.',
  'src': "../../assets/results/image017.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Lokesh Naik',
  'src': "../../assets/results/image018.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Shivakumar',
  'src': "../../assets/results/image019.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Vimala',
  'src': "../../assets/results/image020.jpg" ,
  'designation': "FDA" 
}, {
  'name': 'Manjunatha.T',
  'src': "../../assets/results/image021.jpg" ,
  'designation': "SDA" 
}, {
  'name': 'Kavitha D',
  'src': "../../assets/results/image022.jpg" ,
  'designation': "PDO" 
}, {
  'name': 'Nandini K M',
  'src': "../../assets/results/image023.jpg",
  'designation': "SDA" 
}, {
  'name': 'Chandra Naik',
  'src': "../../assets/results/image024.jpg",
  'designation': "FDA" 
},{
  'name': 'Manjunatha Swami.M.T',
  'src': "../../assets/results/image001.jpg",
  'designation': "KAS"
}, {
  'name': 'Chandan.J.Patil',
  'src': "../../assets/results/image002.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Amitha G',
  'src': "../../assets/results/image003.jpg" ,
  'designation': "KAS" 
}, {
  'name': 'Umapathi B.N',
  'src': "../../assets/results/image004.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Kavitha.S',
  'src': "../../assets/results/image005.jpg",
  'designation': "Geologist"  
}, {
  'name': 'Kavya.S.V',
  'src': "../../assets/results/image006.jpg" ,
  'designation': "Geologist" 
}, {
  'name': 'Radha.M',
  'src': "../../assets/results/image007.jpg",
  'designation': "PSI"  
}, {
  'name': 'Sharath K S',
  'src': "../../assets/results/image008.jpg",
  'designation': "PSI"  
}, {
  'name': 'Ganesh P',
  'src': "../../assets/results/image009.jpg",
  'designation': "PSI"  
}, {
  'name': 'Naveen Naik',
  'src': "../../assets/results/image010.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Sunil Pawar',
  'src': "../../assets/results/image011.jpg" ,
  'designation': "ESI" 
}, {
  'name': 'Purushottam',
  'src': "../../assets/results/image012.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Shreedhara',
  'src': "../../assets/results/image013.jpg" ,
  'designation': "RSI" 
}, {
  'name': 'Manjunatha Naik',
  'src': "../../assets/results/image014.jpg" ,
  'designation': "KSISF" 
}, {
  'name': 'Dhananjay Murthy.G.N',
  'src': "../../assets/results/image015.jpg",
  'designation': "Professor"  
}, {
  'name': 'Yatish Kumar.M',
  'src': "../../assets/results/image016.jpg",
  'designation': "Professor"  
}, {
  'name': 'Nagarthna.H.',
  'src': "../../assets/results/image017.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Lokesh Naik',
  'src': "../../assets/results/image018.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Shivakumar',
  'src': "../../assets/results/image019.jpg" ,
  'designation': "Professor" 
}, {
  'name': 'Vimala',
  'src': "../../assets/results/image020.jpg" ,
  'designation': "FDA" 
}, {
  'name': 'Manjunatha.T',
  'src': "../../assets/results/image021.jpg" ,
  'designation': "SDA" 
}, {
  'name': 'Kavitha D',
  'src': "../../assets/results/image022.jpg" ,
  'designation': "PDO" 
}, {
  'name': 'Nandini K M',
  'src': "../../assets/results/image023.jpg",
  'designation': "SDA" 
}, {
  'name': 'Chandra Naik',
  'src': "../../assets/results/image024.jpg",
  'designation': "FDA" 
}];
