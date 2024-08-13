"use strict";(self.webpackChunkqexe_website=self.webpackChunkqexe_website||[]).push([[9830],{4873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(4848),s=n(8453);const a={sidebar_position:6,custom_edit_url:null},o="Analysis",r={id:"r-analysis",title:"Analysis",description:"'R'eady to go...",source:"@site/docs/r-analysis.mdx",sourceDirName:".",slug:"/r-analysis",permalink:"/qexe/docs/r-analysis",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Example Test",permalink:"/qexe/docs/example-test"},next:{title:"Publications",permalink:"/qexe/docs/publications"}},l={},d=[{value:"&#39;R&#39;eady to go...",id:"ready-to-go",level:2},{value:"Plotting",id:"plotting",level:3},{value:"Mean Opinion Score between scenes.",id:"mean-opinion-score-between-scenes",level:4}];function u(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"analysis",children:"Analysis"}),"\n",(0,i.jsx)(t.h2,{id:"ready-to-go",children:"'R'eady to go..."}),"\n",(0,i.jsx)(t.p,{children:"To analyze the data ouput of the QExE tool, we've provided some R code for some data exploration."}),"\n",(0,i.jsx)(t.p,{children:"Load the results files into R into a collective dataframe in long format."}),"\n",(0,i.jsx)(t.h3,{id:"plotting",children:"Plotting"}),"\n",(0,i.jsx)(t.h4,{id:"mean-opinion-score-between-scenes",children:"Mean Opinion Score between scenes."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-R",children:'library(dplyr)\nlibrary(ggplot2)\n\ndf_results_all # <- data frame with in long format with all results. \n\ngg_results_MOS <- ggplot(df_results_all, aes(x = Item, y = Rating)) +\n  stat_summary(fun.data = "mean_cl_boot", size= 0.6, position = position_dodge(width = 0.4)) +\n  stat_summary(fun.y = mean, geom = "point", position = position_dodge(width = 0.4)) +\n  facet_grid(. ~ Scene) +\n  theme_bw()+\n  ylab("Rating") +\n  xlab("Item") +\n  theme(axis.text.x = element_text(angle = 90, \n                                   vjust = 0.5, \n                                   hjust=1),\n        legend.position = "top")\n'})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-R",children:'# read the raw tracking per subject file .txt and save into a dataframe. \nread_behavior_file <- function(df_main_behavior, resultsPath, subjectFolder) {\n  \n  #pathToFolders <- "../RESULTS/Training_Yes/"\n  #folders <- list.files(path = pathToFolders)\n  #subjectFolder <- folders[1]\n  \n  subjectFilesInFolder <- list.files(path = paste(pathToFolders, subjectFolder, sep=""))\n  \n  # Set behavior file path name.\n  behaviourFilePath <- paste(pathToFolders, subjectFolder, "/", subjectFilesInFolder[1], sep = "")\n  \n  # Remove .txt suffix from SubjectID to use as a subject entry in long format data frame. \n  # subjectID <- gsub(".txt","",behaviourFilePath)\n  \n  print(paste("Start reading behavior.txt ...", behaviourFilePath))\n  \n  df_this_subject_behavior = read.table(behaviourFilePath, header = FALSE, sep = " ", dec = ".", fill = TRUE, col.names = paste(\'V\',seq_len(23)))\n  df_this_subject_behavior <- dplyr::select(df_this_subject_behavior, V.1, V.3, V.5, V.7, V.8, V.9, V.10, V.11, V.12, V.13, V.14, V.15, V.16, V.17,V.18,V.19,V.20,V.21)\n  \n  df_this_subject_behavior$SubjID <- c(gsub(".txt","",subjectFilesInFolder[9]))\n  \n  # find the unique items to analyse the behavior.\n  unique_items_list <- unique(df_this_subject_behavior$V.3)\n  print(unique_items_list)\n\n  # for (i in 1:length(unique_items_list))\n  #   if (unique_items_list[i] != "null"){\n  #     subject_tracking_item_trimmed_df <- trim_tracking_file(subject_tracking_item_trimmed_df, df_main_behavior, unique_items_list[i])\n  #   }\n  \n  df_main_behavior <- rbind(df_main_behavior, df_this_subject_behavior)\n  return(df_main_behavior)\n}\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}}}]);