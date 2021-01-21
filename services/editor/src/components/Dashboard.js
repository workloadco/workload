import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
 hero: {
    
    paddingTop: '50px',
    paddingLeft: '15px',
    paddingBottom: '15px'
    }

});
const Dashboard = () => {
  const classes = useStyles();
  return (
   <div>
    <Card className={classes.hero}>
        <CardHeader style={{textAlign:'center'}} title="Welcome to Workload!" />
        <CardContent>Create your own workflow</CardContent>
    </Card>
   </div>
  );
};
export default Dashboard;