export type Activity = {
  /**
   * unique ID of call
   */
  id: string;
  /**
   * inbound or outbound call
   */
  direction: "outbound" | "inbound";
  /**
   * caller's number
   */
  from: number;
  /**
   * callee's number
   */
  to: number;
  /**
   * Aircall number used for the call
   */
  via: number;
  /**
   * duration of a call (in seconds)
   */
  duration: number;
  /**
   * can be a missed, answered or voicemail call
   */
  call_type: "missed" | "answered" | "voicemail";
  /**
   * call is archived or not
   */
  is_archived: boolean;
  /**
   * creation date
   */
  created_at: string;
};

export type CallDetails = Activity;
