//! IAM
//+ create a user. download the password
//+ create a group
//+ add user to the group
//+ change password policy
//+ to add a user,
//+ to add permission for the user there are multiple wasys. se policy or add permission
//+ we can add policies by going to policies tab and then we can add visually and then we can see rthe json document
//+ password policy can be used to make sure the password is strong enough. we can change the settings from the account settings.
//+ we cam add MFA for multi factor autjhenticatopn
//+ we can install the aws cli from the internet

we can use cloudshell instead of cli.it can be found in the aws web page.we cvan see it on AWS management console
after opening the cloudshell we can run the command.it will work as a api with the credentials of the logged in user.

//+ we can see the credential report on the access reports on Iam
//+ we can see the access advisor  on the user option as the last tab.

//! Roles
permissions given to the services to do sme action on our behalf
go to roles to create a role. 
//+ create a access key using the IAM user. then open aws cli and write 'aws configure'. give the details
//+ after that we can use the CLI
//+try using aws list-users
//! how to access the AWS
//+ AWS Managment console.
//+ aws cOMMAND LINE Interface (CLI) - protected by access keys
//+ AWS Software development Kit (SDK) - protected by same access keys



//! EC2
//+ create a new instance
//+ select the instance and do the steps and then launch
//+ create a key value pair and download it
//+ we can use it when it is running

//+ copy the public ip
//+ make sure the port is 22
//+ open powershelll and type ssh. now we are connected to ssh
//+ ssh -i locationofthefile ec2-user@129.428.432.5.32                          //+ i for identity file . last ip is public ip
//+ this will throw error. to fix it, we can go to the security of the key file and make yourself as the owner and remove all other permissions

//+ we can connect using browser

//! S3
//+ S3 console is global. but the s3 bucket is region based
//+ we can create a bucket and open the bucket cunsole
//+ we can open the file in the actions option
we can get the object url and if we use it we get a access denied. but the s3 bucket is not public.
//+ we can create a folder inside the bucket as well.

//! versioning
we can change versioning in properties tab.
//+ for old file before vertioning will be null as version
//+ if we upload a new file we can see the new version
//+ whenever we re upload a file then the versions will keep changing.
//+ if we delete a file, and the versioning is turned on then it will not delete the file. instead it will add a delete marker with a vertion number . if we delete the marker then we can retain the file.
//+ if we delete a file with a version id or delete a marker, it will delete the file permenently.

//! encryption in s3
//+ we can see the encryption details in the object. also we can see the encryption while we upload the object
//+ or we can set the default encryption mechanism  for the bucket in the property tab.

//! Poicy in s3
//+ we can change the s3 policy in  tab. we can geneate a new policy .
//+ for not allowing to upload unencrypted file - select S3 bucket policy from the type . select deny and give principle as * which means anyone. and give action as putobject for upload. then write the resource name.
then add condition null and key as s3: x - amz - server - side - encryption and value true.also add another condition for StringNotEquals	s3: x - amz - server - side - encryption: "AES256" and generate the policy and copy paste and save changes
if we try to upload a file without a encryption.it will fail

the block all public access settings will block all the data access from the outside
we can host static website in s3

//! MFA S3 Delete

//! S3 audit logs
To turn on logging, open the properties tab of the bucket you want to be logged.

//! replication
go to the management tab amd go to the replication rules and enable it

//! Pre signed url

//! Storage classes
while uploading we can see the class option.

//! life ccle rule
//+ life cycle rule can be find in management. life cycle configuration

//! event notificartion
//+ can be found in the properties > create ecvent notifications

//! Cloud Formation
//+ we can add a stack by passing the url in s3 or we can design it. so it will create the instance for us.
//+ for updating the stack, we can add another template and the stack will be modified
//+ if we delete the stack it will delete everything
//+ There is alink to follow the documentation.

//! Lambda
//+ we can cerate a lambda and select use blueprint for testing.
//+ we can see the code in lambda by pening the code
//+ we can test it by passing dummy value to it.
//+ we can find settings on configuration tab.
//+ in monitoring tab we can see the details
//+ we cam see the code details in runtime settinfgs.in code tab
//+ for asynchronous invocation, we will neveer know what is the output even if it failed or secceeded. so we can add a deal letter queue which will trigger the lambda again if it fails.
//+ we can find it in configuration asynchronous configuration. we can add the retry attempt. and we can use sqs to create a que. after number of given retries, the request will send to SQS or other place



//! API
//+ we can create a API gateway and give lambda function.


//! EC2
click on create ec2 instances.we can select the AMI.and then the Instances.configure the instances.we can see user data settings in the configure option
we can use this to do some operation when the instance loads.copy the text from ec2 code example and paste in the box
this will run a web server and write a file to it.select the disc, there is an option to delete the disc o termination, select it.
we can now select the security group. there we can add one as http and make it available anywhere(ok for learning).
while click launch the instance, we need to have a ssh key pair.we can create one there itself
if we run the public ip address on browser we get hello world that we used to run a web server.
when we stop an instance and again start it, then the public is going to change.private will not change.if I stop the instance, we don need to pay.
