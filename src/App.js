import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import ProductListCard from './components/ProductListCard/ProductListCard'
import Form from './components/Form/Form';
import Navigation from './components/Navigation/Navigation';
import List from './components/List/List';
import Ask from './components/Ask/Ask';
import DataList from './components/DataList/DataList';

const App = () => {
  const data1 = {
    question:'hi',
    answer:[
      { attribute: 'Nominal size [mm]', value: '15' },
      { attribute: 'Format', value: 'FNS - flanged, normal, standard height' },
      { attribute: 'Type of construction', value: 'Ball runner block High Precision' },
      { attribute: 'Ball chain', value: 'Without ball chain (standard)' },
      { attribute: 'Material (profiled rail systems)', value: 'Carbon steel' },
      { attribute: 'Preload class', value: 'C1 - Low preload' },
      { attribute: 'Accuracy class', value: 'H - Highly accurate' },
      { attribute: 'Seal', value: 'SS - Standard seal' },
      { attribute: 'Self-alignment for compensation of misalignments', value: 'Without self-alignment' },
    ]
  }


 const data2= {
    "question": "show example of a cylinder\n",
    "answer": [
        {
            "Stroke": "15 mm",
            "PistonDiameter": "12 mm",
            "Cushioning": "Elastic cushioning rings/plates at both ends",
            "MountingPosition": "optional",
            "Design": "Piston\nPiston rod\nCylinder barrel",
            "PositionDetection": "Via proximity switch",
            "Symbol": "00991217",
            "Variants": null,
            "OperatingPressureMPa": null,
            "OperatingPressureBar": "1.5 bar ... 10 bar",
            "ModeOfOperation": "Double-acting",
            "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
            "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
            "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
            "LABS_PWIS_Conformity": "VDMA24364-B2-L",
            "SuitabilityForTheProductionOfLi_ionBatteries": null,
            "CleanroomClass": "Class 6 according to ISO 14644-1",
            "AmbientTemperature": "-20 °C ... 80 °C",
            "CushioningLength": null,
            "TheoreticalForceAt0_6MPaReturnStroke": "50.9 N",
            "TheoreticalForceAt0_6MPaAdvanceStroke": "67.9 N",
            "MovingMassFor0mmStroke": "16.2 g",
            "AdditionalMovingMassPer10mmStroke": "2 g",
            "BasicWeightFor0mmStroke": "35.9 g",
            "AdditionalWeightPer10mmStroke": "4.2 g",
            "TypeOfMounting": "With accessories",
            "PneumaticConnection": "M5",
            "NoteOnMaterials": "RoHS-compliant",
            "MaterialCover": "Anodised wrought aluminium alloy",
            "MaterialSeals": "TPE-U(PU)",
            "MaterialPistonRod": "High-alloy stainless steel",
            "MaterialCylinderBarrel": "High-alloy stainless steel",
            "OrderCode": "DSNU-S-12-15-P-A-MQ",
            "Code": "5211897",
            "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5211897",
            "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
            "ProductLink": "https://www.festo.com/de/en/a/5211897"
        }
    ]
}


const data3={
  "question": "how many cylinders for different stroke",
  "answer": [
      {
          "Stroke": "1 mm ... 100 mm",
          "COUNT(*)": 1
      },
      {
          "Stroke": "1 mm ... 150 mm",
          "COUNT(*)": 1
      },
      {
          "Stroke": "1 mm ... 200 mm",
          "COUNT(*)": 3
      },
      {
          "Stroke": "10 mm",
          "COUNT(*)": 5
      },
      {
          "Stroke": "100 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "125 mm",
          "COUNT(*)": 7
      },
      {
          "Stroke": "15 mm",
          "COUNT(*)": 5
      },
      {
          "Stroke": "150 mm",
          "COUNT(*)": 7
      },
      {
          "Stroke": "20 mm",
          "COUNT(*)": 5
      },
      {
          "Stroke": "200 mm",
          "COUNT(*)": 6
      },
      {
          "Stroke": "25 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "30 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "40 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "50 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "60 mm",
          "COUNT(*)": 8
      },
      {
          "Stroke": "80 mm",
          "COUNT(*)": 8
      }
  ]
}


const data={
  "question": "show all cylinder with stroke of 15 mm",
  "answer": [
      {
          "Stroke": "15 mm",
          "PistonDiameter": "12 mm",
          "Cushioning": "Elastic cushioning rings/plates at both ends",
          "MountingPosition": "optional",
          "Design": "Piston\nPiston rod\nCylinder barrel",
          "PositionDetection": "Via proximity switch",
          "Symbol": "00991217",
          "Variants": null,
          "OperatingPressureMPa": null,
          "OperatingPressureBar": "1.5 bar ... 10 bar",
          "ModeOfOperation": "Double-acting",
          "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
          "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
          "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
          "LABS_PWIS_Conformity": "VDMA24364-B2-L",
          "SuitabilityForTheProductionOfLi_ionBatteries": null,
          "CleanroomClass": "Class 6 according to ISO 14644-1",
          "AmbientTemperature": "-20 °C ... 80 °C",
          "CushioningLength": null,
          "TheoreticalForceAt0_6MPaReturnStroke": "50.9 N",
          "TheoreticalForceAt0_6MPaAdvanceStroke": "67.9 N",
          "MovingMassFor0mmStroke": "16.2 g",
          "AdditionalMovingMassPer10mmStroke": "2 g",
          "BasicWeightFor0mmStroke": "35.9 g",
          "AdditionalWeightPer10mmStroke": "4.2 g",
          "TypeOfMounting": "With accessories",
          "PneumaticConnection": "M5",
          "NoteOnMaterials": "RoHS-compliant",
          "MaterialCover": "Anodised wrought aluminium alloy",
          "MaterialSeals": "TPE-U(PU)",
          "MaterialPistonRod": "High-alloy stainless steel",
          "MaterialCylinderBarrel": "High-alloy stainless steel",
          "OrderCode": "DSNU-S-12-15-P-A-MQ",
          "Code": "5211897",
          "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5211897",
          "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
          "ProductLink": "https://www.festo.com/de/en/a/5211897"
      },
      {
          "Stroke": "15 mm",
          "PistonDiameter": "16 mm",
          "Cushioning": "Elastic cushioning rings/plates at both ends",
          "MountingPosition": "optional",
          "Design": "Piston\nPiston rod\nCylinder barrel",
          "PositionDetection": "Via proximity switch",
          "Symbol": "00991217",
          "Variants": null,
          "OperatingPressureMPa": null,
          "OperatingPressureBar": "0.8 bar ... 10 bar",
          "ModeOfOperation": "Double-acting",
          "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
          "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
          "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
          "LABS_PWIS_Conformity": "VDMA24364-B2-L",
          "SuitabilityForTheProductionOfLi_ionBatteries": null,
          "CleanroomClass": "Class 6 according to ISO 14644-1",
          "AmbientTemperature": "-20 °C ... 80 °C",
          "CushioningLength": null,
          "TheoreticalForceAt0_6MPaReturnStroke": "103.7 N",
          "TheoreticalForceAt0_6MPaAdvanceStroke": "120.6 N",
          "MovingMassFor0mmStroke": "18.3 g",
          "AdditionalMovingMassPer10mmStroke": "2 g",
          "BasicWeightFor0mmStroke": "48.9 g",
          "AdditionalWeightPer10mmStroke": "4.8 g",
          "TypeOfMounting": "With accessories",
          "PneumaticConnection": "M5",
          "NoteOnMaterials": "RoHS-compliant",
          "MaterialCover": "Anodised wrought aluminium alloy",
          "MaterialSeals": "TPE-U(PU)",
          "MaterialPistonRod": "High-alloy stainless steel",
          "MaterialCylinderBarrel": "High-alloy stainless steel",
          "OrderCode": "DSNU-S-16-15-P-A-MQ",
          "Code": "5216088",
          "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5216088",
          "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
          "ProductLink": "https://www.festo.com/de/en/a/5216088"
      },
      {
          "Stroke": "15 mm",
          "PistonDiameter": "20 mm",
          "Cushioning": "Elastic cushioning rings/plates at both ends",
          "MountingPosition": "optional",
          "Design": "Piston\nPiston rod\nCylinder barrel",
          "PositionDetection": "Via proximity switch",
          "Symbol": "00991217",
          "Variants": null,
          "OperatingPressureMPa": null,
          "OperatingPressureBar": "0.8 bar ... 10 bar",
          "ModeOfOperation": "Double-acting",
          "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
          "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
          "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
          "LABS_PWIS_Conformity": "VDMA24364-B2-L",
          "SuitabilityForTheProductionOfLi_ionBatteries": null,
          "CleanroomClass": "Class 6 according to ISO 14644-1",
          "AmbientTemperature": "-20 °C ... 80 °C",
          "CushioningLength": null,
          "TheoreticalForceAt0_6MPaReturnStroke": "158.3 N",
          "TheoreticalForceAt0_6MPaAdvanceStroke": "188.5 N",
          "MovingMassFor0mmStroke": "37.3 g",
          "AdditionalMovingMassPer10mmStroke": "4 g",
          "BasicWeightFor0mmStroke": "126 g",
          "AdditionalWeightPer10mmStroke": "7.2 g",
          "TypeOfMounting": "With accessories",
          "PneumaticConnection": "G1/8",
          "NoteOnMaterials": "RoHS-compliant",
          "MaterialCover": "Anodised wrought aluminium alloy",
          "MaterialSeals": "TPE-U(PU)",
          "MaterialPistonRod": "High-alloy stainless steel",
          "MaterialCylinderBarrel": "High-alloy stainless steel",
          "OrderCode": "DSNU-S-20-15-P-A-MX",
          "Code": "5224634",
          "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5224634",
          "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
          "ProductLink": "https://www.festo.com/de/en/a/5224634"
      },
      {
          "Stroke": "15 mm",
          "PistonDiameter": "25 mm",
          "Cushioning": "Elastic cushioning rings/plates at both ends",
          "MountingPosition": "optional",
          "Design": "Piston\nPiston rod\nCylinder barrel",
          "PositionDetection": "Via proximity switch",
          "Symbol": "00991217",
          "Variants": null,
          "OperatingPressureMPa": null,
          "OperatingPressureBar": "0.6 bar ... 10 bar",
          "ModeOfOperation": "Double-acting",
          "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
          "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
          "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
          "LABS_PWIS_Conformity": "VDMA24364-B2-L",
          "SuitabilityForTheProductionOfLi_ionBatteries": null,
          "CleanroomClass": "Class 6 according to ISO 14644-1",
          "AmbientTemperature": "-20 °C ... 80 °C",
          "CushioningLength": null,
          "TheoreticalForceAt0_6MPaReturnStroke": "247.4 N",
          "TheoreticalForceAt0_6MPaAdvanceStroke": "294.5 N",
          "MovingMassFor0mmStroke": "63.6 g",
          "AdditionalMovingMassPer10mmStroke": "6 g",
          "BasicWeightFor0mmStroke": "180.2 g",
          "AdditionalWeightPer10mmStroke": "11 g",
          "TypeOfMounting": "With accessories",
          "PneumaticConnection": "G1/8",
          "NoteOnMaterials": "RoHS-compliant",
          "MaterialCover": "Anodised wrought aluminium alloy",
          "MaterialSeals": "TPE-U(PU)",
          "MaterialPistonRod": "High-alloy stainless steel",
          "MaterialCylinderBarrel": "High-alloy stainless steel",
          "OrderCode": "DSNU-S-25-15-P-A-MX",
          "Code": "5228228",
          "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5228228",
          "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
          "ProductLink": "https://www.festo.com/de/en/a/5228228"
      },
      {
          "Stroke": "15 mm",
          "PistonDiameter": "8 mm",
          "Cushioning": "Elastic cushioning rings/plates at both ends",
          "MountingPosition": "optional",
          "Design": "Piston\nPiston rod\nCylinder barrel",
          "PositionDetection": "Via proximity switch",
          "Symbol": "00991217",
          "Variants": null,
          "OperatingPressureMPa": null,
          "OperatingPressureBar": "1.5 bar ... 10 bar",
          "ModeOfOperation": "Double-acting",
          "OperatingMedium": "Compressed air to ISO 8573-1:2010 [7:4:4]",
          "NoteOnOperatingAndPilotMedium": "Lubricated operation possible (in which case lubricated operation will always be required)",
          "CorrosionResistanceClassCRC": "2 - Moderate corrosion stress",
          "LABS_PWIS_Conformity": "VDMA24364-B2-L",
          "SuitabilityForTheProductionOfLi_ionBatteries": null,
          "CleanroomClass": "Class 6 according to ISO 14644-1",
          "AmbientTemperature": "-20 °C ... 80 °C",
          "CushioningLength": null,
          "TheoreticalForceAt0_6MPaReturnStroke": "22.6 N",
          "TheoreticalForceAt0_6MPaAdvanceStroke": "30.2 N",
          "MovingMassFor0mmStroke": "6.3 g",
          "AdditionalMovingMassPer10mmStroke": "1 g",
          "BasicWeightFor0mmStroke": "20 g",
          "AdditionalWeightPer10mmStroke": "2.4 g",
          "TypeOfMounting": "With accessories",
          "PneumaticConnection": "M5",
          "NoteOnMaterials": "RoHS-compliant",
          "MaterialCover": "Anodised wrought aluminium alloy",
          "MaterialSeals": "TPE-U(PU)",
          "MaterialPistonRod": "High-alloy stainless steel",
          "MaterialCylinderBarrel": "High-alloy stainless steel",
          "OrderCode": "DSNU-S-8-15-P-A-MQ",
          "Code": "5205898",
          "DataSheetLink": "https://www.festo.com/de/en/a/download-document/datasheet/5205898",
          "MannualLink": "https://www.festo.com/media/pim/046/D15000100152046.PDF",
          "ProductLink": "https://www.festo.com/de/en/a/5205898"
      }
  ]
}
  const products = [
    {
      id: 'R167139410',
      title: 'BALL RUNNER BLOCK CARBON STEEL KWC-035-BNS-C0-N-2',
      description: 'Ball runner block, BNS, size 35, steel CS, accuracy standard, preload-free, without ball chain',
      image: 'https://via.placeholder.com/100',
      shippingLocation: 'Charlotte, US',
      maxOrder: 20,
      price: 475.36,
      stock: 54,
    },
    {
      id: 'R167131410',
      title: 'BALL RUNNER BLOCK CARBON STEEL KWC-035-BNS-C1-N-2',
      description: 'Ball runner block, BNS, size 35, steel CS, accuracy standard, low preload, without ball chain',
      image: 'https://via.placeholder.com/100',
      shippingLocation: 'Charlotte, US',
      maxOrder: 20,
      price: 475.36,
      stock: 73,
    },
  ];



const dataList = [
  {
    key1: "value1",
    key2: "value2"
  },
  {
    key1: "value1",
    key2: "value2"
  },
  {
    key1: "value1",
    key2: "value2"
  },
  {
    key1: "value1",
    key2: "value2"
  }
];

  return (
    <div className="App">
      <Navigation />
      <List data={data} />
      
      {/* <DataList items={dataList} /> */}
      <Ask />
      {/* <Form />
      <Table data={data} />
      {products.map((product) => (
        <ProductListCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default App;
