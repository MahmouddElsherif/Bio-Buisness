export const products = [
    {
        id: 'neonatal-care',
        title: 'Neonatal Care',
        description: 'Advanced clinical solutions for our tiny patients.',
        items: [
            {
                id: 'bioluxy-pt10',
                name: 'BioLUXY PT10',
                tagline: 'Targeted LED Phototherapy',
                specs: ['12 LEDs (450-465nm)', 'High/Low Irradiance', 'Red Positioning Lamp']
            },
            {
                id: 'bioluxy-pt20',
                name: 'BioLuxy PT20',
                tagline: 'Advanced Touch Phototherapy',
                specs: ['4.3" Touch Screen', 'Skin Temp Sensor', '10 Patient Tracking']
            },
            {
                id: 'biotherm-iw10',
                name: 'BioTherm IW10',
                tagline: 'Infant Radiant Warmer',
                specs: ['10.4" Touch Screen', 'Precise Thermal Control', 'Integrated Scale Option']
            },
            {
                id: 'bioanne-ic10',
                name: 'BioAnne IC10',
                tagline: 'Neonatal Incubator',
                specs: ['Climate Control', 'Double Wall Insulation', 'Low Noise']
            }
        ]
    },
    {
        id: 'respiratory-care',
        title: 'Respiratory Care',
        description: 'Smarter ventilation for intensive care units.',
        items: [
            {
                id: 'biovent-a-series',
                name: 'BioVent A Series',
                tagline: 'Upgradable Ventilator Platform',
                subtypes: ['HF80 (High Flow)', 'NIV10 (Non-Invasive)'],
                specs: ['Internal Blower', 'O2 Control Block', '2hr Battery Backup']
            }
        ]
    },
    {
        id: 'telemonitoring',
        title: 'Telemonitoring',
        description: 'Remote IoT solutions for healthcare anywhere.',
        items: [
            {
                id: 'inspector-v3',
                name: 'Inspector V3',
                tagline: 'Cloud Monitoring System'
            },
            {
                id: 'inspector-v4',
                name: 'Inspector V4',
                tagline: 'Advanced Remote Monitoring'
            },
            {
                id: 'portable-inspector',
                name: 'Portable Inspector',
                tagline: 'Field Hospital Ready'
            },
            {
                id: 'inspector-airwatch',
                name: 'Inspector AirWatch',
                tagline: 'Environmental Air Quality Tracking',
                specs: ['CO2', 'TVOC', 'PM2.5/10', 'Wi-Fi/GPRS']
            }
        ]
    }
];
