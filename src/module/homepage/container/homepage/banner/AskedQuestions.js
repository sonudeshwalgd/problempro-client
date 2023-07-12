import React from 'react'
import { styled } from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AskedQuestions() {
  return (
    <Wrapper>
        <h5 className='sub-title'>Frequently Asked Questions</h5>
        <div className="main">
            <div className="content">
                <div className="accordian">
                <Accordion sx={{background:"#C6F4FD",padding:"5px 15px 5px 31px"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{height:"40px",width:"40px", color:"black"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontSize:"30px" ,color:"black", fontWeight:"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:"20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque eu lectus interdum pharetra. Donec gravida faucibus ex, sit amet sagittis mauris porta a. Morbi tincidunt in purus vel pellentesque.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className="accordian">
                <Accordion sx={{background:"#C6F4FD",padding:"5px 15px 5px 31px"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{height:"40px",width:"40px", color:"black"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontSize:"30px" ,color:"black", fontWeight:"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:"20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque eu lectus interdum pharetra. Donec gravida faucibus ex, sit amet sagittis mauris porta a. Morbi tincidunt in purus vel pellentesque.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className="accordian">
                <Accordion sx={{background:"#C6F4FD",padding:"5px 15px 5px 31px"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{height:"40px",width:"40px", color:"black"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontSize:"30px" ,color:"black", fontWeight:"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:"20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque eu lectus interdum pharetra. Donec gravida faucibus ex, sit amet sagittis mauris porta a. Morbi tincidunt in purus vel pellentesque.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
                <div className="accordian">
                <Accordion sx={{background:"#C6F4FD",padding:"5px 15px 5px 31px"}}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{height:"40px",width:"40px", color:"black"}} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography sx={{fontSize:"30px" ,color:"black", fontWeight:"500"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography sx={{fontSize:"20px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed neque eu lectus interdum pharetra. Donec gravida faucibus ex, sit amet sagittis mauris porta a. Morbi tincidunt in purus vel pellentesque.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                </div>
 
            </div>

        </div>


    </Wrapper>
  )
}

const Wrapper=styled.div`
width: 100vw;
position: relative;
padding-bottom: 92px;
.main{
    max-width: 1440px;
    margin: auto;
    .content{
        display: flex;
        flex-direction: column;
        gap: 25px;
        .accordian{
            max-width: 1030px;
            margin: auto;
        }

    }
}

 .sub-title{
            font-family: 'Judson', serif;
            font-size: 48px;
            text-align: center;
            margin: auto;
            padding: 92px 20px;
            padding-bottom:0 ;
            margin-bottom: 92px;
            width: max-content;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 100%;
                height: 4px;
                border-radius: 2px;
                background-color: #19C4E5;
            }
}
.MuiPaper-elevation{
    border-radius: 30px !important;
}



`







