/*

#2 Task - Batch the work

[Description]
  - Create a function `batch` that will orchestrate your async executions so it perform at most `X` async functions at a time. 
  - Failure of single async call should not break the execution.
  - Function should return the result of each call. 

-------------------------------------------------------------------

[Example] 
  - Given 100 API calls, 30 requests in a single batch.
  - Function should perform 4 batches - (30, 30, 30, 10);
*/
