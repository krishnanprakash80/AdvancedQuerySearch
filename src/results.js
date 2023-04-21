class results extends Component {
    constructor(props) {
      super(props);
      this.state = {
        results: [
            { Name: 'Amanda Jones', LOB: 'Medicare', State: 'FL', Provider: 'Healthnet California', ProcedureCode:1287877, Authorization_Type: 'IP', DateRange:'09/02/21 - Current'},
            { Name: 'Constantine J.', LOB: 'Medicare', State: 'FL', Provider: 'California', ProcedureCode:1287878, Authorization_Type: 'OP', DateRange:'09/02/2021 - Current'},
            { Name: 'Michael F', LOB: 'Medicare', State: 'FL', Provider: 'Qualchoice', ProcedureCode:1287879, Authorization_Type: 'IP/OP', DateRange:'10/02/2021 - 11/02/2022'},
            { Name: 'Krystal Peters', LOB: 'Medicare', State: 'FL', Provider: 'Sunshine Health', ProcedureCode:1287880, Authorization_Type: 'OP', DateRange:'09/02/2021 - Current'},
            { Name: 'Harry Smith', LOB: 'Medicare', State: 'FL', Provider: 'Qualchoic', ProcedureCode:1287881, Authorization_Type: 'IP', DateRange:'12/02/2021 - Current'},
            { Name: 'Andy Wilson', LOB: 'Medicare', State: 'FL', Provider: 'California', ProcedureCode:1287882, Authorization_Type: 'IP', DateRange:'09/02/21 - Current'},
            { Name: 'Terrie Soper', LOB: 'Medicare', State: 'TX', Provider: 'Qualchoice', ProcedureCode:1287883, Authorization_Type: 'OP', DateRange:'09/02/2021 - Current'},
            { Name: 'Marc J', LOB: 'Medicare', State: 'TX', Provider: 'Sunshine Health', ProcedureCode:1287884, Authorization_Type: 'IP/OP', DateRange:'10/02/2021 - 11/02/2022'},
            { Name: 'Brianna M', LOB: 'Medicare', State: 'TX', Provider: 'Qualchoic', ProcedureCode:1287885, Authorization_Type: 'OP', DateRange:'09/02/2021 - Current'},
            { Name: 'David O', LOB: 'Medicare', State: 'TX', Provider: 'Sunshine Health', ProcedureCode:1287886, Authorization_Type: 'IP', DateRange:'12/02/2021 - Current'}
        ]
      };
    }
  }