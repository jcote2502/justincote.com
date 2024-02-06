import img1 from '../Assets/Images/431Pics/img1.png';
import img2 from '../Assets/Images/431Pics/img2.png';
import img3 from '../Assets/Images/431Pics/img3.png';
import img4 from '../Assets/Images/431Pics/img4.png';
import img5 from '../Assets/Images/431Pics/img5.png';
import img6 from '../Assets/Images/431Pics/img6.png';

// Author : Justin Cote
const handleDragStart = (e) => e.preventDefault();

class Project {
    
    SentimentalAnalysis() {
        const myData = {
            title: 'Sentimental Analysis Project',
            tags: ['AI/ML', 'Python'],
            images: [],
            attribute: 'Capstone Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '15 weeks',
            links: [],
            summary: [
                `This is one of three Capstone Projects I participated in during my senior fall semester at Penn State. 
                In a group of 5 members we were tasked with finding a suitable dataset to utilize a convolutional and recurrent nueral network model on. 
                At the start of the semester I wanted to perform my own Sentimental Analysis on Twitter comments and found this project to be the perfect opportunity. 
                I assumed the leadership role in the group and took charge of laying out deadlines and an outline of the design process.
                After our submission at the end of the semester we gave a presentation to our professor and peers and earned an 85% on the entire project.`
            ],
            description: {
                "Task and Dataset Preprocessing":
                    `
                    We began our project by finding a suitable dataset to use for our model. I found a generic dataset from kaggle that provided the Twitter comment with a tag corresponding to its sentimental value. 
                    The values provided were Positive (1), Nuetral (0), and Negative (-1). This allowed us to easily transform the data to be used in a nueral network. 
                    This is the column we will predict for so we extracted it for the training data. Clean_comment is the string value that corresponds to Category. This is the comment we need to 
                    extract to train the model. Thus we extracted it and later prepared it to be used correctly when training the model. After unzipping data to our current file, we cleaned the data to remove 
                    special characters. To prepare the data we filled any null spaces with an empty string and 
                    encoded our text data to numerical representations using a Tokenizer. Once all data was converted to numerical values, we could split the data into sets; train and test.
                `,
                "Implementation and Architectures":
                    `
                    We implemented our Convolutional Neural Network (CNN) using the TensorFlow and Keras frameworks. The implementation is encapsulated within the CNNModel class, providing a 
                    structured and modular approach to building and training the model. The architecture, encapsulated within the CNNModel class, encompasses key 
                    components such as an embedding layer for vectorizing words, a 1D convolutional layer with ReLU activation, global max-pooling for feature extraction, and dense layers facilitating 
                    sentiment classification into negative, neutral, and positive categories. The model is trained with categorical cross entropy loss, Adam optimizer, and employs early stopping to prevent 
                    overfitting during the training process. This CNN architecture is tailored to capture hierarchical 
                    features in text data, particularly for sentiment analysis. 
                    The model architecture begins with an embedding layer, mapping words to vectors, 
                    followed by a SpatialDropout1D layer to introduce dropout in the embedding space. The core of 
                    the model is an LSTM (Long Short-Term Memory) layer with 100 units, incorporating dropout
                    and recurrent dropout for regularization. The final layer is a dense layer with softmax activation,
                    indicating the model's classification into three sentiment classes: negative, neutral, and positive.
                    During training, early stopping is implemented to monitor the validation loss, and training is
                    halted if improvement ceases, restoring the best weights.
                `,
                "Training Details":
                    `
                    The dataset is loaded from a CSV file and preprocessed by cleaning the text data and filtering relevant sentiment labels. The preprocessing steps include transforming text data into 
                    sequences of numerical values and encoding the sentiment labels. The dataset is then split into training, validation, and test sets using the train_test_split function from scikit-learn. The training 
                    set comprises the majority of the data, with the validation set used for monitoring the model's 
                    performance during training and early stopping to prevent overfitting. The test set remains unseen during training and serves as an independent evaluation set to assess the model's 
                    generalization to new data. We split our data so that we had 97783 training samples to 32595 test 
                    and validation samples. This provided a larger test case to train the model on so that our accuracy would be increased after.
                `,
                "Results and Observations":
                    `
                    The CNN model exhibits a strong training performance, reaching a training accuracy of 98.91% after five epochs, while the validation accuracy stabilizes at 95.75%. The test accuracy is 
                    consistent with the validation accuracy at 95.69%, showcasing the model's generalization to unseen data. On the other hand, the RNN model demonstrates a comparable training accuracy of 
                    98.18% after five epochs, with a slightly higher validation accuracy of 96.79%. The test accuracy 
                    is consistent with the validation accuracy at 96.85%. The RNN model seems to capture
                    sequential dependencies effectively, leading to a slightly higher validation and test accuracy compared to the CNN model.
                    In conclusion, both models exhibit strong performance in sentiment analysis, with the
                    RNN model marginally outperforming the CNN model in terms of validation and test accuracy.
                    The choice between these models may depend on specific use cases and preferences, considering
                    factors such as computational resources and interpretability. 
                `,
                "Challenges And Obstacles":
                    `
                    Our first major obstacle was an issue with our dataset. At first we wanted to do
                    something with stock data so we tried to predict stocks with CNN and RNN which did not work
                    too well. After reviewing the slides and lectures we found a more optimized solution. Hence our
                    chosen task being sentimental analysis on Twitter comments. We found that adjusting our dataset
                    for the given deep learning algorithms affected our output positively.
                    For cleaning the datasets, we encountered obstacles due to data that fell outside the
                    defined labels. Eliminating these mislabeled or erroneous entries was crucial to ensure the
                    integrity of our dataset. It required meticulous scrutiny and filtering processes to remove these
                    discrepancies and maintain the quality of the data we were working with.
                    Moreover, during the testing phase of our code, we confronted issues related to errors and
                    libraries. Installing each required library on our machine became a necessary step, and we
                    meticulously checked the functionality and compatibility of each code snippet. Debugging was a
                    significant part of this phase, ensuring that the code executed seamlessly without any errors.
                `
            }
        }
        return myData;
    }

    NFL_Fanshop() {
        const myData = {
            title: 'NFL Fanshop',
            tags: ['Web Development', 'JavaScript', 'Python'],
            images: [
                <img key={1} alt='' src={img1} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
                <img key={2} alt='' src={img2} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
                <img key={3} alt='' src={img3} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
                <img key={4} alt='' src={img4} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
                <img key={5} alt='' src={img5} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
                <img key={6} alt='' src={img6} onDragStart={handleDragStart} role='presentation' style={{ objectFit: 'contain', width: '100%', height: '100%' }}/>,
            ],
            attribute: 'Capstone Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '15 weeks',
            links: ['https://github.com/jcote2502/client', 'https://github.com/jcote2502/server'],
            summary: `This is one of three Capstone Projects I participated in during my senior fall semester at Penn State.
            My roommate and myself were gifted the opportunity to work on this one together which was very exciting for me.
            Being I had prior experience in full stack development I assumed the leadership role for this project. 
            I took charge of laying out the entire design process and the required steps to deploy our site. Whereas my partner 
            created a formal document to set our deadlines and explain the project to our professors. The NFL Fanshop site aims to 
            replicate a real world shopping site on a smaller scale. I chose to use the Reactjs framwork to manage our frontend, the NPM package 
            to manage our backend server, and a local MySQL server to host our database. The reason for these decisions and more can be found below. After our final submission we recieved a 100% on our Capstone Project.`,
            description: {
                'Motivation':
                    `
                    As a team, we are motivated by the passion of NFL fans, and fans of football in general. 
                    We strived to create a user-friendly place where passionate fans get the gear they need to root on their favorite team or player. 
                    We chose to create a website because we thought it would be fun to apply our database management skills alongside developing our frontend design 
                    and backend skills. We wanted to create something we can show off to our friends and family as something constructed completely from scratch. 
                    Personally, I wanted to go the extra mile to have something from college that looked professionally done to display all that I've learned. 
                    `,
                'Task and Deployment':
                    `
                    Our task given for our capstone project was to create a DBMS that met certain design requirements and highlighted promenant programming techniques. 
                    The project needed to contain at least 8 tables, make use of a transaction in a proper way, join 5 tables to display relations among meaningful data, update/insert/delete records, 
                    and create tables using DDL. Our final project ended up having 9 tables, 16 data features, a transaction for making purchases, and a five table join query to merge past purchases 
                    and refund information. I took on the challenge of determining how we would deploy our site and make it portable to different systems. This was one of the most crucial design choices 
                    throughout the project because it was the foundation for what we would build on. I decided our best choice was to build the front end using Reactjs and the backend in Nodejs. After 
                    working with this so much I've fallen in love with the NPM package and understand it very well now. After building our project we deployed the front end to a public url using Netlify 
                    so that our users could access our store front from anywhere. To save some resources and time I decided our backend would be downloadable for the user to then run on their local machine. 
                    This did require our users to install necessary packages like NPM and local dependencies like Express. In order to create our database I had an initialization method that the user would run on 
                    their local host to completely build our MySQL structure on their machine. I intended to host it online so users can all access the same instance of the database however, this would have required 
                    us to purchase a domain to host our database. This design choice was made soley for financial and labor purposes of our project. By making these design choices I was able to move forward in 
                    building the front and back end of the project without worrying about how to transport or access from another machine.  
                    `,
                'Generating Our Data':
                    `
                    My partner and I agreed that we needed to design our database structure before anything else. I recognized we would have static and dynamic tables. 
                    Our dynamic tables would be those directly manipulated by users and their actions on the site. Whereas our static tables would host product data and would only be manipulated or 
                    changed by ourselves. Seeing that we would need to populate these tables with products to sell I began working to build our catalogue. I utilized webscraping techniques to scrape NFL 
                    player information from online. Using Python we organized this data into a file to then create products from. In addition I created an array of all 32 football teams and an array of product types. 
                    Using python I wrote a script that would output a CSV file made of records for players and products. This CSV file was then used in our initialization to populate our static tables in our MySQL database. 
                    I managed to generate over 4,000 different products that consisted of Jerseys, Shoes, long/short sleeve shirts, shorts, and joggers. 
                    All items had different color variants, team variants, size variants, and gender variants. This took me approximately 1.5 hours to perfect using python. 
                    We were even awarded extra points on our capstone for such efficient data generation.
                    `,
                'Site Features':
                    `
                    Our online shop has features that allow the user to search products by specific team or player. Then the user was able to sort based on size, color, or product type. 
                    This was the heart of the site, the user would land on the shopping page and would be prompted to sign in if they tried to add something to their cart. 
                    Upon signing in users could add up to three items to their cart to purchase at once. They would also be able to remove items from their cart and continue shopping. 
                    Our navigation layed in a fixed position at the top of the site which allowed for easy access to any page at any time. The user could click on their cart at any time or their account profile. 
                    In the account profile page existed three frames for interaction: Update User Info, View Past Transactions/Refund a specific item, and View Refunds. 
                    Designing the entire front end took the most time for us. This took approximately 2 weeks of thoughtful design choices, programming, and testing.  
                    `,
                'Backend Design':
                    `
                    We utilized data definition language (DDL) to declare how our data would be structured in the database. We made use of primary, candidate, and foreign keys to keep data consistent among tables. 
                    We tackled the problem of unique IDs for primary keys by utilizing the auto-increment data type constraint in our tables. This allowed for records to be uniquely identified when querying transactions that 
                    belonged to specific users. Our DDL was the foundation for maintaining a secure and properly functioning database system. This is also where our schema resided for ensuring bad actors could not insert bad 
                    data or hijack our system. We then ensured our data manipulation language (DML) allowed for easy implementation in our frontend. We created 16 data feature methods to extract, manipulate, and create records 
                    in our database. These queries constantly cross-referenced our DDL to ensure system functionality withheld attacks. 
                    `,
                'Challenges':
                    `
                    Some of the major challenges we faced were designing the UI for the project. As this was not a requirement for the project everything we did was independent from the class. 
                    I took charge of this because I have had previous background working in React. I was very ambitious with this project so at first my ideas were all over the place. 
                    I had an issue trying to implement so many complex ideas into the front end that the backend was not up to par for. So my partner and I sat down and created a document of basic things the site 
                    should do. I created a drawing for the desired look of each page and then documented each component with its purpose to the site. I found this to be very helpful in managing a huge project. 
                    Once we were able to make abstractions of thoughts within the project's front end we had little trouble from that point on. We also had some issues in the backend when trying to figure out how 
                    to build an efficient transaction and the proper syntax that went with it. After reading documentation for Node and SQL we found promising results within a couple of hours and were able to move 
                    quickly through our DML.
                    `
            }
        }
        return myData;
    }

    LexicalAnalysis() {
        const myData = {
            title: 'POS Prediction',
            tags: ['AI/ML', 'Python'],
            images: [],
            attribute: 'Midterm Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '6 weeks',
            links: [],
            summary: `Given a text file formatted with two columns [Token, POS] my group was tasked to build three models to predict the part of speech of words in a sentence. The three models we created were a Bayesian Classifier, 
            a Logistic Regression, and a Support Vector Machine. After building, training and testing the models, we were required to compare them to each other as well as combine them to optimize our prediction accuracy. Our final 
            training accuracy averaged at 98% among 10 different runs. We utilized the python libraries sklearn and the sci-tools kit. After submission we recieved a 98% on the project (the highest in the class by 5%). I was very satisfied with this project and enjoyed working on it in a team setting.
            `,
            description: {
                'Data Preprocessing':
                    `
                    We extracted data from the given text file into a pandas dataframe. Using the dataframe we extracted features word, next and previous word, word length, prefix, suffix, and capitalization. 
                    We found that additional features slowed down the runtime drastically. After feature extraction, we split the data using the sklearn [train_test_split] function into 80% used for training and 20% used for testing. 
                    We then used teh DictVectorizer class method to transform our data into vectors.
                    `,
                'Models':
                {
                    'Bayesian Classifier':
                        `
                        Processes the input data line by line, classifies each line of text into a tag using the trained Naive Bayes classifier.
                        `,
                    'SVM Classifier':
                        `
                        LinearSVC uses a “one-vs-the-rest” multi-class strategy to perform multi-class classification. Classified each token with a tag using the model's predict function.
                        `,
                    'Logistic Regression':
                        `
                        Initialized the model with 100 iterations. Used the LogisticRegression.fit function to train the model. Classified each token with a tag using the model's predict function.
                        `
                },
                'Conclusion':
                    `
                    Each of the three algorithms (SVM, Bayesian, and Logistic Regression) performs in POS tagging  and we compare their accuracy, speed, and resource requirements. 
                    Based on our  analysis, SVM demonstrated superior accuracy in POS tagging, indicating its robustness in classifying words into their respective parts of speech and  this  algorithm performs better in terms of accuracy or efficiency.
                    `
            }
        }
        return myData;
    }

    DynamicMemory() {
        const myData = {
            title: 'Malloc Library',
            tags: ['Systems Programming', 'C'],
            images: [],
            attribute: 'Midterm Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '6 weeks',
            links: [],
            summary: `This was the first project of the semester for my senior level operating systems class. 
            Being that the scope of the project was very complex this counted as our Midterm Project. 
            The purpose of the project was to become familiar with optimizing space and time for a dynamic memory allocator. 
            We were tasked to design code that produced a functional heap that could be utilized in the kernel space as well as the user space. 
            The goal for this project was to create an optimized version of the malloc package that could replace the ones in the STDLIB. 
            The code designed in this project was then implemented in our Mini OS project to serve as the C malloc library.`,
            description: {
                'Project Outline':
                    `
                    My teammate and myself saw the complexity of this project and began working immediately. 
                    Our first major design decision was to utilize an implicit free block list (only track free blocks in the heap). 
                    This allowed for some early space and time optimization. In addition, we thought it would be efficient 
                    to use structs to hold information about individual blocks. This struct would hold information about the size, 
                    the next block in the list, and the previous block in the list. To describe if the block was free or allocated we 
                    utilized bitwise operators to mask this in the size attribute. Because all sizes were 16 byte aligned the last bit defaulted 
                    to zero (free) and would be adjusted to one if allocated. The struct size was set to be 32 bytes in order to follow 
                    the 16 bit alignment constraint. Eventually, this struct was sized down to save space in the heap. We moved the 'next' and 'prev' block 
                    pointers into the payload and out of the struct. This allowed for more space optimization since the payload “data” would be 
                    aligned to 16 bytes before being allocated.
                    `,
                'Check Point 1':
                    `
                    By the end of the second week, our group was required to have a functioning malloc library that could allocate, reallocate, and 
                    free space in the heap. Thus we needed to have methods complete for Init, Malloc, Free, Realloc, and Calloc. We thought that 
                    designing the project in this linear way provided benefits for testing and time efficiency.
                    `,
                'CheckPoint Methods': {
                    'Init':
                        `
                        Our initialization function was called whenever a new process was created in the OS user stack or when the kernel space was initialized. 
                        This function served one purpose, which was to set up the environment for the relevant heap. Upon being called, the function executed steps 
                        in a linear manner for mounting the system. First, we checked that our “mem_high” and “mem_lo” were the same. This checked that upon entering 
                        there wasn't already a heap structure for this process in existence. Then we used a provided function “mem_sbrk” to expand the heap to our intended initial size (160 bytes). 
                        We then created pointers to mark a prologue and epilogue of our heap to enforce boundaries. This helped eliminate issues regarding a consistent 16 byte alignment 
                        and also proved helpful for testing and debugging. Lastly, it would denote the memory between the prologue and epilogue as one large free block. Thus, our 
                        freeblock list now had one pointer in it that pointed to the start of the free block. The head/header of the block held the struct information followed by the payload. Before 
                        exiting the function, it would check that the heap was expanded to the right size and the prologue and epilogue were set in the correct positions.
                        `,
                    'Malloc':
                        `
                        Our malloc function was the project's vital organ. Everything worked around this method so it was crucial it functioned in an efficient manner. Upon being called, malloc would 
                        take a requested size to make space for in the heap. When the function returned it would then return a pointer to the address of the newly allocated block payload start. 
                        This way the memory block can be referenced and used in the higher level user program. The malloc function would begin by aligning the requested size to 16 bytes before doing anything else. 
                        Then it would run through a series of conditional pipelines to find an optimized space for the requested block. Because of the implicit free list, the time complexity of this problem was 
                        exceptionally well. At this point our time optimization was almost maximized for our project. It was later improved with optimization functions that are discussed below on this page. 
                        After finding a suitable space of memory in the heap we would change that free block to an allocated block. Using the bitwise operators we masked a 1 onto the end of the 'size_t' 
                        size variable in the struct. Then it would adjust its 'next' and 'prev' pointers to null as it was no longer in the free list. The block was then successfully allocated and ejected from the free block list. 
                        If there were no free blocks available we would expand the heap. This concept was turned into a custom method that I wrote later down the road; this will be discussed more below as well. 
                        `,
                    'Free':
                        `
                        The free function was designed to take a pointer returned by the malloc function and free that block selected. Its return was void so there was no check for if a successful free was made or not. 
                        These checks would happen as the execution pointer moved through each line of the function. It would first check that the block was allocated. Then, it would change its corresponding struct to 
                        turn the last bit of the size variable from a 1 to a 0. Lastly it would update its next and prev pointers. Early in the project it would do this by adjusting the struct. 
                        Later in the project it would do this by adjusting the values at the begining of the payload. Aside from the init function this function gave us the least amount of problems in testing and debugging. 
                        `,
                    'Realloc And Calloc':
                        `
                        This function was used for adjusting the size of a previously allocated block. It would take the pointer generated by the malloc function and use this to adjust the size. 
                        If the pointer was null it would simply just call malloc with the requested size. If the size could not be increased in the space it was currently located, the heap would be required to expand 
                        by the requested space and then allocated at the end of the heap. This meant the previous memory pool would have been required to be freed. If the adjustment size was less than the current 
                        size it would just split the current block to the necessary size. The calloc method was the most simple of all. It would call our malloc function and then use memset to set the payload to 0's. 
                        `
                },
                'Additional Features': {
                    'Splitting':
                        `
                        We found that our space optimization was below average and overall lacked proper thought. Our first step of increasing our space utilization was to introduce splitting into our project. 
                        This technique is used to save space by checking whether blocks can be split when being allocated. I began writing a function called 'Split' to take in specific parameters regarding the block in question. 
                        It would then split the block in half leaving one side allocated and appending the other to the free block list as a new block. Before executing a split we made sure to check that the 
                        conditions for splitting were viable. This was done in our malloc function.
                        `,
                    'Expand Heap':
                        `
                        I wrote this method to help make the readability of our code better. I found this to be beneficial for debugging and testing. This also condensed our code significanly because this 
                        task was reused in multple cases throughout the code. It takes a desired size to expand the heap by and calls 'mem_sbrk' with that size. Then it checks that the size of the heap is correct 
                        and adjusts the epilogue to its new location.
                        `,
                    'Coalesce':
                        `
                        This function was used to increase our space optimization. The function would take a pointer to the address of the current free block. It would then look to optimize space by 
                        checking the surrounding blocks in the heap. If any or all of the surrounding blocks were free it would merge them into one large space. 
                        This helped limit fragmentation in our heap and reduced the need to expand the heap when free blocks were not large enough for a specified payload size.
                        `
                },
                'Testing And Debugging':
                    `
                    We were required to extensively test and debug our code. We use the GNU Debugger GDB to step through our code and find bugs. Complemented by some self written functions, 
                    GDB helped us identify issues with our code. Both my partner and I spent hours stepping through our code watching values update and memory spaces increase/decrease. 
                    `

            }
        }
        return myData;
    }

    MiniOS() {
        const myData = {
            title: 'Mini OS',
            tags: ['Systems Programming', 'C'],
            images: [],
            attribute: 'Supplemental Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '3 weeks',
            links: [],
            summary: `This was the second project of my senior level operating systems class. We were tasked with designing a small operating system to set up a simple system call and initilize a four level page table. 
            The system consisted of three pieces. The boot loader, which loaded the OS kernel and a user application into memory. The OS kernel (x86_64), which runs in the privileged mode. Lastly, a simple user application 
            that runs in unprivileged mode. Our professor provided us with Qemu, mainly used for a UI interface to report system diagnostics and performance. Our task was to write methods for the kernel initialization and 
            system call entries. In addition we included our malloc code from the previous project to be used in substitution of the C malloc library.`,
            description: {
                'Page Table Creation':
                    `
                    The kernel_init function initializes page tables for virtual memory management in an operating system kernel. It sets up Page Table Entries (PTEs), Page Directory Entries (PDEs), and Page Directory Pointer Entries (PDPEs) to establish a hierarchical page table structure. 
                    The code also initializes the last level of the page table and sets pointers to the page tables, user stack, and user program. 
                    `,
            }
        }
        return myData;
    }

    ThreadSystem() {
        const myData = {
            title: 'Concurrency and Threads',
            tags: ['Systems Programming', 'C'],
            images: [],
            attribute: 'Capstone Project',
            location: 'Penn State, University Park',
            dateRange: '2023 Fall Semester',
            duration: '7 weeks',
            links: [],
            summary: `This is one of three Capstone Projects I participated in during my senior fall semester at Penn State. In this project, the goal was to implement a concurrent channel for message passing, 
            akin to the channel model used in languages like Go. The task involved creating functions such as channel_create, channel_send, channel_receive, channel_close, and channel_destroy to manage the 
            channel's behavior. The implementation required careful consideration of synchronization, supporting both blocking and non-blocking modes, and handling buffered channels. The use of provided helper 
            constructs like the buffer_t functions and adherence to specific programming rules, such as avoiding spinning in polling loops and fixed-time sleeping, were crucial aspects. The evaluation involved running test cases, 
            including checks for data races using sanitizers and detecting memory leaks with Valgrind, ensuring the correctness and efficiency of the implementation.
            `,
            description: {
                'Channel Create':
                    `
                    The channel_create method initializes a new channel with the specified size, creating a buffered channel if the size is positive. It allocates memory for the channel, initializes its components, and returns the created channel. This method sets up the necessary data structures for concurrent message passing.
                    `,
                'Channel Send':
                    `
                    The channel_send method writes data to the channel, either blocking until space is available (in blocking mode) or returning a WOULDBLOCK status if the channel is full (in non-blocking mode). It handles channel closure gracefully, returning a CLOSED_ERROR status if the channel is closed. Successful sends are indicated by the SUCCESS status.
                    `,
                'Channel Receive':
                    `
                    The channel_receive method reads data from the channel, blocking until data is available (in blocking mode) or returning a WOULDBLOCK status if the channel is empty (in non-blocking mode). Similar to channel_send, it handles channel closure, returning a CLOSED_ERROR status when the channel is closed. Successful receives are indicated by the SUCCESS status.
                    `,
                'Channel Close':
                    `
                    The channel_close method closes the channel, preventing further send and receive operations. It informs blocked senders and receivers to return with a CLOSED_ERROR status. The method returns SUCCESS if the close operation is successful, and CLOSED_ERROR if the channel is already closed.
                    `,
                'Channel Destroy':
                    `
                    The channel_destroy method frees all memory allocated to the channel, ensuring that resources are released appropriately. It returns SUCCESS if the destruction is successful, DESTROY_ERROR if attempted on an open channel, and OTHER_ERROR in any other error case.
                    `
            }
        }
        return myData;
    }

    HeardTHT() {
        const myData = {
            title: 'HeardTHT',
            tags: ['Mobile Development', 'React-Native'],
            images: [],
            attribute: 'Personal Pursuit',
            location: '',
            dateRange: 'Summer 2022 - Present',
            duration: '~2 years',
            links: [],
            summary: `HeardTHT has been a personal venture pursuit of mine. Having an interest in entrepruenuership, I decided to pursue an Innovation and Leadership minor to complement my Computer Science background. 
            The concept of the idea is a mobile app that hosts its users music data in one central 
            location as a standardized data type. In doing so this allows for the implementation of several features 
            like: Moving music across various streaming platforms, Collaborating on playlists with friends, Sharing music to friends across platforms, and 
            discovering new music. This project was an outlet for me to engage in learning real world applications for programming mobile apps, while also learning how to plan a venture. 
            This project helped me develop my business side and technical side skills. Someday I hope to launch this venture and share it with people across the country.`,
            description: {
                'Talking Business':
                    `
                    Over the past two years I've taken 18 credits (6 classes) pertaining to how engineers can improve their entrepreneurship mindset and skills. The underlying lesson that connected all 
                    six of the classes together, was a fundamental process procured from years of studies and data. Each class had its own variation of content and focus. However, all of them identified 
                    ways to devise a viable business idea, determine if your goals were long/short-term, construct a robust business model, test your business model, reflect on your data, resolve possible 
                    problems, and choose to pivot, pursue, or move on from your idea. Through these classes, I've devised a business model for this idea, sought ways to beat competitors, conducted surveys to test my model, 
                    made changes where I saw fit, calculated required finances for launch, identify ways to produce a steady revenue stream, gained knowledge on where to find well-suited investors, and devised methods for an 
                    optimal marketing plan. Across this two year period I have found this venture to be a feasible pursuit.
                    `,
                'Design and Implementation':
                    `
                    When I began designing this project, I originally started in Flutter. The Flutter framework attracted me with its portability across platforms and easy implementation. 
                    However, later in the development process I started learning about React and decided the React-Native framework was a better fit for me. React-Native came with a more abundant amount of 
                    libraries and compatibility for what I was attempting to build. After migrating from Flutter to React, I began designing a user interface. At the time, I started here because I wanted 
                    to develop my front end design skills. Looking back, I realized I should have begun by designing my database and all api connections. HeardTHT currently uses multiple Firebase FireStore data collections to hold user information, music data, and images. My backend, which is written in Node, handles connections to music APIs and streaming service APIs.
                    `,
                'Current and Future Plans':
                    `
                    Currently, the app has a functional authentication system for users (login/signup). In addition users can update their account information, profile settings, and app theme color. 
                    The Spotify API has been completely connected so that users can link their Spotify account to HeardTHT. I am in the process of connecting to the Apple Music API. Then will continue 
                    to implement the others as well. My academics tend to limit my time working on the project, thus it is taking longer than I desired. Eventually, I want to attempt to get this 
                    venture off the ground one day after I am out of school.
                    `
            }
        }
        return myData;
    }


    FileSystem() {
        const myData = {
            title: 'File System',
            tags: ['Systems Programming', 'C'],
            images: [],
            attribute: 'Assignment',
            location: 'Penn State, University Park',
            dateRange: '2021 Fall Semester',
            duration: '15 weeks',
            links: [],
            summary: '',
            description: ''
        }
        return myData;
    }
}


const project = new Project();

export default project;