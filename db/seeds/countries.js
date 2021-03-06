exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('countries').del(),

    // Inserts seed entries
    knex('countries').insert([
      {'id': 1, 'name': 'Alaska', 'code': 'USA-AK', 'created_at': new Date()},
      {'id': 2, 'name': 'Alabama', 'code': 'USA-AL', 'created_at': new Date()},
      {'id': 3, 'name': 'Arkansas', 'code': 'USA-AR', 'created_at': new Date()},
      {'id': 4, 'name': 'Arizona', 'code': 'USA-AZ', 'created_at': new Date()},
      {'id': 5, 'name': 'California', 'code': 'USA-CA', 'created_at': new Date()},
      {'id': 6, 'name': 'Colorado', 'code': 'USA-CO', 'created_at': new Date()},
      {'id': 7, 'name': 'Connecticut', 'code': 'USA-CT', 'created_at': new Date()},
      {'id': 8, 'name': 'District of Columbia', 'code': 'USA-DC', 'created_at': new Date()},
      {'id': 9, 'name': 'Delaware', 'code': 'USA-DE', 'created_at': new Date()},
      {'id': 10, 'name': 'Florida', 'code': 'USA-FL', 'created_at': new Date()},
      {'id': 11, 'name': 'Georgia', 'code': 'USA-GA', 'created_at': new Date()},
      {'id': 12, 'name': 'Hawaii', 'code': 'USA-HI', 'created_at': new Date()},
      {'id': 13, 'name': 'Iowa', 'code': 'USA-IA', 'created_at': new Date()},
      {'id': 14, 'name': 'Idaho', 'code': 'USA-ID', 'created_at': new Date()},
      {'id': 15, 'name': 'Illinois', 'code': 'USA-IL', 'created_at': new Date()},
      {'id': 16, 'name': 'Indiana', 'code': 'USA-IN', 'created_at': new Date()},
      {'id': 17, 'name': 'Kansas', 'code': 'USA-KS', 'created_at': new Date()},
      {'id': 18, 'name': 'Kentucky', 'code': 'USA-KY', 'created_at': new Date()},
      {'id': 19, 'name': 'Louisiana', 'code': 'USA-LA', 'created_at': new Date()},
      {'id': 20, 'name': 'Massachusetts', 'code': 'USA-MA', 'created_at': new Date()},
      {'id': 21, 'name': 'Maryland', 'code': 'USA-MD', 'created_at': new Date()},
      {'id': 22, 'name': 'Maine', 'code': 'USA-ME', 'created_at': new Date()},
      {'id': 23, 'name': 'Michigan', 'code': 'USA-MI', 'created_at': new Date()},
      {'id': 24, 'name': 'Minnesota', 'code': 'USA-MN', 'created_at': new Date()},
      {'id': 25, 'name': 'Missouri', 'code': 'USA-MO', 'created_at': new Date()},
      {'id': 26, 'name': 'Mississippi', 'code': 'USA-MS', 'created_at': new Date()},
      {'id': 27, 'name': 'Montana', 'code': 'USA-MT', 'created_at': new Date()},
      {'id': 28, 'name': 'North Carolina', 'code': 'USA-NC', 'created_at': new Date()},
      {'id': 29, 'name': 'North Dakota', 'code': 'USA-ND', 'created_at': new Date()},
      {'id': 30, 'name': 'Nebraska', 'code': 'USA-NE', 'created_at': new Date()},
      {'id': 31, 'name': 'New Hampshire', 'code': 'USA-NH', 'created_at': new Date()},
      {'id': 32, 'name': 'New Jersey', 'code': 'USA-NJ', 'created_at': new Date()},
      {'id': 33, 'name': 'New Mexico', 'code': 'USA-NM', 'created_at': new Date()},
      {'id': 34, 'name': 'Nevada', 'code': 'USA-NV', 'created_at': new Date()},
      {'id': 35, 'name': 'New York', 'code': 'USA-NY', 'created_at': new Date()},
      {'id': 36, 'name': 'Ohio', 'code': 'USA-OH', 'created_at': new Date()},
      {'id': 37, 'name': 'Oklahoma', 'code': 'USA-OK', 'created_at': new Date()},
      {'id': 38, 'name': 'Oregon', 'code': 'USA-OR', 'created_at': new Date()},
      {'id': 39, 'name': 'Pennsylvania', 'code': 'USA-PA', 'created_at': new Date()},
      {'id': 40, 'name': 'Puerto Rico', 'code': 'USA-PR', 'created_at': new Date()},
      {'id': 41, 'name': 'Rhode Island', 'code': 'USA-RI', 'created_at': new Date()},
      {'id': 42, 'name': 'South Carolina', 'code': 'USA-SC', 'created_at': new Date()},
      {'id': 43, 'name': 'South Dakota', 'code': 'USA-SD', 'created_at': new Date()},
      {'id': 44, 'name': 'Tennessee', 'code': 'USA-TN', 'created_at': new Date()},
      {'id': 45, 'name': 'Texas', 'code': 'USA-TX', 'created_at': new Date()},
      {'id': 46, 'name': 'Utah', 'code': 'USA-UT', 'created_at': new Date()},
      {'id': 47, 'name': 'Virginia', 'code': 'USA-VA', 'created_at': new Date()},
      {'id': 48, 'name': 'Vermont', 'code': 'USA-VT', 'created_at': new Date()},
      {'id': 49, 'name': 'Washington', 'code': 'USA-WA', 'created_at': new Date()},
      {'id': 50, 'name': 'Wisconsin', 'code': 'USA-WI', 'created_at': new Date()},
      {'id': 51, 'name': 'West Virginia', 'code': 'USA-WV', 'created_at': new Date()},
      {'id': 52, 'name': 'Wyoming', 'code': 'USA-WY', 'created_at': new Date()},
      {'id': 53, 'name': 'Afghanistan', 'code': 'AFG', 'created_at': new Date()},
      {'id': 54, 'name': 'Angola', 'code': 'AGO', 'created_at': new Date()},
      {'id': 55, 'name': 'Albania', 'code': 'ALB', 'created_at': new Date()},
      {'id': 56, 'name': 'United Arab Emirates', 'code': 'ARE', 'created_at': new Date()},
      {'id': 57, 'name': 'Argentina', 'code': 'ARG', 'created_at': new Date()},
      {'id': 58, 'name': 'Armenia', 'code': 'ARM', 'created_at': new Date()},
      {'id': 59, 'name': 'Antarctica', 'code': 'ATA', 'created_at': new Date()},
      {'id': 60, 'name': 'French Southern and Antarctic Lands', 'code': 'ATF', 'created_at': new Date()},
      {'id': 61, 'name': 'Australia', 'code': 'AUS', 'created_at': new Date()},
      {'id': 62, 'name': 'Austria', 'code': 'AUT', 'created_at': new Date()},
      {'id': 63, 'name': 'Azerbaijan', 'code': 'AZE', 'created_at': new Date()},
      {'id': 64, 'name': 'Burundi', 'code': 'BDI', 'created_at': new Date()},
      {'id': 65, 'name': 'Belgium', 'code': 'BEL', 'created_at': new Date()},
      {'id': 66, 'name': 'Benin', 'code': 'BEN', 'created_at': new Date()},
      {'id': 67, 'name': 'Burkina Faso', 'code': 'BFA', 'created_at': new Date()},
      {'id': 68, 'name': 'Bangladesh', 'code': 'BGD', 'created_at': new Date()},
      {'id': 69, 'name': 'Bulgaria', 'code': 'BGR', 'created_at': new Date()},
      {'id': 70, 'name': 'The Bahamas', 'code': 'BHS', 'created_at': new Date()},
      {'id': 71, 'name': 'Bosnia and Herzegovina', 'code': 'BIH', 'created_at': new Date()},
      {'id': 72, 'name': 'Belarus', 'code': 'BLR', 'created_at': new Date()},
      {'id': 73, 'name': 'Belize', 'code': 'BLZ', 'created_at': new Date()},
      {'id': 74, 'name': 'Bermuda', 'code': 'BMU', 'created_at': new Date()},
      {'id': 75, 'name': 'Bolivia', 'code': 'BOL', 'created_at': new Date()},
      {'id': 76, 'name': 'Brazil', 'code': 'BRA', 'created_at': new Date()},
      {'id': 77, 'name': 'Brunei', 'code': 'BRN', 'created_at': new Date()},
      {'id': 78, 'name': 'Bhutan', 'code': 'BTN', 'created_at': new Date()},
      {'id': 79, 'name': 'Botswana', 'code': 'BWA', 'created_at': new Date()},
      {'id': 80, 'name': 'Central African Republic', 'code': 'CAF', 'created_at': new Date()},
      {'id': 81, 'name': 'Canada', 'code': 'CAN', 'created_at': new Date()},
      {'id': 82, 'name': 'Switzerland', 'code': 'CHE', 'created_at': new Date()},
      {'id': 83, 'name': 'Chile', 'code': 'CHL', 'created_at': new Date()},
      {'id': 84, 'name': 'China', 'code': 'CHN', 'created_at': new Date()},
      {'id': 85, 'name': 'Ivory Coast', 'code': 'CIV', 'created_at': new Date()},
      {'id': 86, 'name': 'Cameroon', 'code': 'CMR', 'created_at': new Date()},
      {'id': 87, 'name': 'Democratic Republic of the Congo', 'code': 'COD', 'created_at': new Date()},
      {'id': 88, 'name': 'Republic of the Congo', 'code': 'COG', 'created_at': new Date()},
      {'id': 89, 'name': 'Colombia', 'code': 'COL', 'created_at': new Date()},
      {'id': 90, 'name': 'Costa Rica', 'code': 'CRI', 'created_at': new Date()},
      {'id': 91, 'name': 'Cuba', 'code': 'CUB', 'created_at': new Date()},
      {'id': 92, 'name': 'Northern Cyprus', 'code': 'CYP', 'created_at': new Date()},
      {'id': 93, 'name': 'Cyprus', 'code': 'CYP', 'created_at': new Date()},
      {'id': 94, 'name': 'Czech Republic', 'code': 'CZE', 'created_at': new Date()},
      {'id': 95, 'name': 'Germany', 'code': 'DEU', 'created_at': new Date()},
      {'id': 96, 'name': 'Djibouti', 'code': 'DJI', 'created_at': new Date()},
      {'id': 97, 'name': 'Denmark', 'code': 'DNK', 'created_at': new Date()},
      {'id': 98, 'name': 'Dominican Republic', 'code': 'DOM', 'created_at': new Date()},
      {'id': 99, 'name': 'Algeria', 'code': 'DZA', 'created_at': new Date()},
      {'id': 100, 'name': 'Ecuador', 'code': 'ECU', 'created_at': new Date()},
      {'id': 101, 'name': 'Egypt', 'code': 'EGY', 'created_at': new Date()},
      {'id': 102, 'name': 'Eritrea', 'code': 'ERI', 'created_at': new Date()},
      {'id': 103, 'name': 'Spain', 'code': 'ESP', 'created_at': new Date()},
      {'id': 104, 'name': 'Estonia', 'code': 'EST', 'created_at': new Date()},
      {'id': 105, 'name': 'Ethiopia', 'code': 'ETH', 'created_at': new Date()},
      {'id': 106, 'name': 'Finland', 'code': 'FIN', 'created_at': new Date()},
      {'id': 107, 'name': 'Fiji', 'code': 'FJI', 'created_at': new Date()},
      {'id': 108, 'name': 'Falkland Islands', 'code': 'FLK', 'created_at': new Date()},
      {'id': 109, 'name': 'France', 'code': 'FRA', 'created_at': new Date()},
      {'id': 110, 'name': 'Gabon', 'code': 'GAB', 'created_at': new Date()},
      {'id': 111, 'name': 'United Kingdom', 'code': 'GBR', 'created_at': new Date()},
      {'id': 112, 'name': 'Georgia', 'code': 'GEO', 'created_at': new Date()},
      {'id': 113, 'name': 'Ghana', 'code': 'GHA', 'created_at': new Date()},
      {'id': 114, 'name': 'Guinea', 'code': 'GIN', 'created_at': new Date()},
      {'id': 115, 'name': 'Gambia', 'code': 'GMB', 'created_at': new Date()},
      {'id': 116, 'name': 'Guinea Bissau', 'code': 'GNB', 'created_at': new Date()},
      {'id': 117, 'name': 'Equatorial Guinea', 'code': 'GNQ', 'created_at': new Date()},
      {'id': 118, 'name': 'Greece', 'code': 'GRC', 'created_at': new Date()},
      {'id': 119, 'name': 'Greenland', 'code': 'GRL', 'created_at': new Date()},
      {'id': 120, 'name': 'Guatemala', 'code': 'GTM', 'created_at': new Date()},
      {'id': 121, 'name': 'French Guiana', 'code': 'GUF', 'created_at': new Date()},
      {'id': 122, 'name': 'Guyana', 'code': 'GUY', 'created_at': new Date()},
      {'id': 123, 'name': 'Honduras', 'code': 'HND', 'created_at': new Date()},
      {'id': 124, 'name': 'Croatia', 'code': 'HRV', 'created_at': new Date()},
      {'id': 125, 'name': 'Haiti', 'code': 'HTI', 'created_at': new Date()},
      {'id': 126, 'name': 'Hungary', 'code': 'HUN', 'created_at': new Date()},
      {'id': 127, 'name': 'Indonesia', 'code': 'IDN', 'created_at': new Date()},
      {'id': 128, 'name': 'India', 'code': 'IND', 'created_at': new Date()},
      {'id': 129, 'name': 'Ireland', 'code': 'IRL', 'created_at': new Date()},
      {'id': 130, 'name': 'Iran', 'code': 'IRN', 'created_at': new Date()},
      {'id': 131, 'name': 'Iraq', 'code': 'IRQ', 'created_at': new Date()},
      {'id': 132, 'name': 'Iceland', 'code': 'ISL', 'created_at': new Date()},
      {'id': 133, 'name': 'Israel', 'code': 'ISR', 'created_at': new Date()},
      {'id': 134, 'name': 'Italy', 'code': 'ITA', 'created_at': new Date()},
      {'id': 135, 'name': 'Jamaica', 'code': 'JAM', 'created_at': new Date()},
      {'id': 136, 'name': 'Jordan', 'code': 'JOR', 'created_at': new Date()},
      {'id': 137, 'name': 'Japan', 'code': 'JPN', 'created_at': new Date()},
      {'id': 138, 'name': 'Kazakhstan', 'code': 'KAZ', 'created_at': new Date()},
      {'id': 139, 'name': 'Kenya', 'code': 'KEN', 'created_at': new Date()},
      {'id': 140, 'name': 'Kyrgyzstan', 'code': 'KGZ', 'created_at': new Date()},
      {'id': 141, 'name': 'Cambodia', 'code': 'KHM', 'created_at': new Date()},
      {'id': 142, 'name': 'South Korea', 'code': 'KOR', 'created_at': new Date()},
      {'id': 143, 'name': 'Kosovo', 'code': 'KOS', 'created_at': new Date()},
      {'id': 144, 'name': 'Kuwait', 'code': 'KWT', 'created_at': new Date()},
      {'id': 145, 'name': 'Laos', 'code': 'LAO', 'created_at': new Date()},
      {'id': 146, 'name': 'Lebanon', 'code': 'LBN', 'created_at': new Date()},
      {'id': 147, 'name': 'Liberia', 'code': 'LBR', 'created_at': new Date()},
      {'id': 148, 'name': 'Libya', 'code': 'LBY', 'created_at': new Date()},
      {'id': 149, 'name': 'Sri Lanka', 'code': 'LKA', 'created_at': new Date()},
      {'id': 150, 'name': 'Lesotho', 'code': 'LSO', 'created_at': new Date()},
      {'id': 151, 'name': 'Lithuania', 'code': 'LTU', 'created_at': new Date()},
      {'id': 152, 'name': 'Luxembourg', 'code': 'LUX', 'created_at': new Date()},
      {'id': 153, 'name': 'Latvia', 'code': 'LVA', 'created_at': new Date()},
      {'id': 154, 'name': 'Morocco', 'code': 'MAR', 'created_at': new Date()},
      {'id': 155, 'name': 'Moldova', 'code': 'MDA', 'created_at': new Date()},
      {'id': 156, 'name': 'Madagascar', 'code': 'MDG', 'created_at': new Date()},
      {'id': 157, 'name': 'Mexico', 'code': 'MEX', 'created_at': new Date()},
      {'id': 158, 'name': 'Macedonia', 'code': 'MKD', 'created_at': new Date()},
      {'id': 159, 'name': 'Mali', 'code': 'MLI', 'created_at': new Date()},
      {'id': 160, 'name': 'Myanmar', 'code': 'MMR', 'created_at': new Date()},
      {'id': 161, 'name': 'Montenegro', 'code': 'MNE', 'created_at': new Date()},
      {'id': 162, 'name': 'Mongolia', 'code': 'MNG', 'created_at': new Date()},
      {'id': 163, 'name': 'Mozambique', 'code': 'MOZ', 'created_at': new Date()},
      {'id': 164, 'name': 'Mauritania', 'code': 'MRT', 'created_at': new Date()},
      {'id': 165, 'name': 'Malawi', 'code': 'MWI', 'created_at': new Date()},
      {'id': 166, 'name': 'Singapore', 'code': 'SGP', 'created_at': new Date()},
      {'id': 167, 'name': 'Malaysia', 'code': 'MYS', 'created_at': new Date()},
      {'id': 168, 'name': 'Namibia', 'code': 'NAM', 'created_at': new Date()},
      {'id': 169, 'name': 'New Caledonia', 'code': 'NCL', 'created_at': new Date()},
      {'id': 170, 'name': 'Niger', 'code': 'NER', 'created_at': new Date()},
      {'id': 171, 'name': 'Nigeria', 'code': 'NGA', 'created_at': new Date()},
      {'id': 172, 'name': 'Nicaragua', 'code': 'NIC', 'created_at': new Date()},
      {'id': 173, 'name': 'Netherlands', 'code': 'NLD', 'created_at': new Date()},
      {'id': 174, 'name': 'Norway', 'code': 'NOR', 'created_at': new Date()},
      {'id': 175, 'name': 'Nepal', 'code': 'NPL', 'created_at': new Date()},
      {'id': 176, 'name': 'New Zealand', 'code': 'NZL', 'created_at': new Date()},
      {'id': 177, 'name': 'Oman', 'code': 'OMN', 'created_at': new Date()},
      {'id': 178, 'name': 'Pakistan', 'code': 'PAK', 'created_at': new Date()},
      {'id': 179, 'name': 'Panama', 'code': 'PAN', 'created_at': new Date()},
      {'id': 180, 'name': 'Peru', 'code': 'PER', 'created_at': new Date()},
      {'id': 181, 'name': 'Philippines', 'code': 'PHL', 'created_at': new Date()},
      {'id': 182, 'name': 'Papua New Guinea', 'code': 'PNG', 'created_at': new Date()},
      {'id': 183, 'name': 'Poland', 'code': 'POL', 'created_at': new Date()},
      {'id': 184, 'name': 'Puerto Rico', 'code': 'PRI', 'created_at': new Date()},
      {'id': 185, 'name': 'North Korea', 'code': 'PRK', 'created_at': new Date()},
      {'id': 186, 'name': 'Portugal', 'code': 'PRT', 'created_at': new Date()},
      {'id': 187, 'name': 'Paraguay', 'code': 'PRY', 'created_at': new Date()},
      {'id': 188, 'name': 'Qatar', 'code': 'QAT', 'created_at': new Date()},
      {'id': 189, 'name': 'Romania', 'code': 'ROU', 'created_at': new Date()},
      {'id': 190, 'name': 'Russia', 'code': 'RUS', 'created_at': new Date()},
      {'id': 191, 'name': 'Rwanda', 'code': 'RWA', 'created_at': new Date()},
      {'id': 192, 'name': 'Western Sahara', 'code': 'ESH', 'created_at': new Date()},
      {'id': 193, 'name': 'Saudi Arabia', 'code': 'SAU', 'created_at': new Date()},
      {'id': 194, 'name': 'Sudan', 'code': 'SDN', 'created_at': new Date()},
      {'id': 195, 'name': 'South Sudan', 'code': 'SDS', 'created_at': new Date()},
      {'id': 196, 'name': 'Senegal', 'code': 'SEN', 'created_at': new Date()},
      {'id': 197, 'name': 'Solomon Islands', 'code': 'SLB', 'created_at': new Date()},
      {'id': 198, 'name': 'Sierra Leone', 'code': 'SLE', 'created_at': new Date()},
      {'id': 199, 'name': 'El Salvador', 'code': 'SLV', 'created_at': new Date()},
      {'id': 200, 'name': 'Somaliland', 'code': 'SOM', 'created_at': new Date()},
      {'id': 201, 'name': 'Somalia', 'code': 'SOM', 'created_at': new Date()},
      {'id': 202, 'name': 'Republic of Serbia', 'code': 'SRB', 'created_at': new Date()},
      {'id': 203, 'name': 'Suriname', 'code': 'SUR', 'created_at': new Date()},
      {'id': 204, 'name': 'Slovakia', 'code': 'SVK', 'created_at': new Date()},
      {'id': 205, 'name': 'Slovenia', 'code': 'SVN', 'created_at': new Date()},
      {'id': 206, 'name': 'Sweden', 'code': 'SWE', 'created_at': new Date()},
      {'id': 207, 'name': 'Swaziland', 'code': 'SWZ', 'created_at': new Date()},
      {'id': 208, 'name': 'Syria', 'code': 'SYR', 'created_at': new Date()},
      {'id': 209, 'name': 'Chad', 'code': 'TCD', 'created_at': new Date()},
      {'id': 210, 'name': 'Togo', 'code': 'TGO', 'created_at': new Date()},
      {'id': 211, 'name': 'Thailand', 'code': 'THA', 'created_at': new Date()},
      {'id': 212, 'name': 'Tajikistan', 'code': 'TJK', 'created_at': new Date()},
      {'id': 213, 'name': 'Turkmenistan', 'code': 'TKM', 'created_at': new Date()},
      {'id': 214, 'name': 'East Timor', 'code': 'TLS', 'created_at': new Date()},
      {'id': 215, 'name': 'Trinidad and Tobago', 'code': 'TTO', 'created_at': new Date()},
      {'id': 216, 'name': 'Tunisia', 'code': 'TUN', 'created_at': new Date()},
      {'id': 217, 'name': 'Turkey', 'code': 'TUR', 'created_at': new Date()},
      {'id': 218, 'name': 'Taiwan', 'code': 'TWN', 'created_at': new Date()},
      {'id': 219, 'name': 'United Republic of Tanzania', 'code': 'TZA', 'created_at': new Date()},
      {'id': 220, 'name': 'Uganda', 'code': 'UGA', 'created_at': new Date()},
      {'id': 221, 'name': 'Ukraine', 'code': 'UKR', 'created_at': new Date()},
      {'id': 222, 'name': 'Uruguay', 'code': 'URY', 'created_at': new Date()},
      {'id': 223, 'name': 'United States of America', 'code': 'USA', 'created_at': new Date()},
      {'id': 224, 'name': 'Uzbekistan', 'code': 'UZB', 'created_at': new Date()},
      {'id': 225, 'name': 'Venezuela', 'code': 'VEN', 'created_at': new Date()},
      {'id': 226, 'name': 'Vietnam', 'code': 'VNM', 'created_at': new Date()},
      {'id': 227, 'name': 'Vanuatu', 'code': 'VUT', 'created_at': new Date()},
      {'id': 228, 'name': 'West Bank', 'code': 'PSE', 'created_at': new Date()},
      {'id': 229, 'name': 'Yemen', 'code': 'YEM', 'created_at': new Date()},
      {'id': 230, 'name': 'South Africa', 'code': 'ZAF', 'created_at': new Date()},
      {'id': 231, 'name': 'Zambia', 'code': 'ZMB', 'created_at': new Date()},
      {'id': 232, 'name': 'Zimbabwe', 'code': 'ZWE', 'created_at': new Date()}
    ])
  );
};
